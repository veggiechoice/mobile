import { FormHandles } from '@unform/core';
import React, { useState, useRef, useCallback } from 'react';
import {  Alert, TextInput } from 'react-native';
import Input from '../../../components/Input';
import { Form } from '@unform/mobile';
import { Container,SignInButton } from './styles';
import { useAuth } from '../../../hooks/auth';


const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const mailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async ({email, password}) => {
    try {
      await signIn({ email, password });
    } catch (err) {
      console.log(err);
      Alert.alert('Dados incorretos, verifique seus dados!');
    }
  }, []);
  return(
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          name="email"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu E-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
          ref={mailInputRef}
        />
      <Input
        label="Senha"
        name="password"
        secureTextEntry
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite sua senha"
        returnKeyType="send"
        ref={passwordInputRef}
        onSubmitEditing={() => {
          formRef.current?.submitForm();
        }}
      />
      </Form>
      <SignInButton
        loading={false}
        onPress={() => {
          formRef.current?.submitForm();
        }}
      >
          Acessar
      </SignInButton>
    </Container>
  );
}


export default SignIn;
