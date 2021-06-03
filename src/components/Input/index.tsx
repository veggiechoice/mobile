/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import {MaterialIcons} from '@expo/vector-icons';
import { Container, TInput, Label, Wrapper } from './styles';
import React, {
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

interface InutProps extends TextInputProps {
  name: string;
  label: string;
  isBigInput?: boolean;
}
interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InutProps> = (
  { name , label, isBigInput, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputValueRef.current.value) {
      setIsFilled(true);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));


  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
   <Wrapper>
      <Label>{label}</Label>
      <Container isBigInput={isBigInput || false}>
        <TInput
          ref={inputElementRef}
          keyboardAppearance="default"
          defaultValue={defaultValue}
          isBigInput={isBigInput || false}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          multiline={isBigInput || false}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          {...rest as any}
        />
      </Container>
    </Wrapper>
  )

}

export default forwardRef(Input);
