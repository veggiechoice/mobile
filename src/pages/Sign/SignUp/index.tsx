import React, { useCallback, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';
import Input from '../../../components/Input';
import { Container,SignUpButton } from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import api from '../../../services/api';
import { useNavigation } from '@react-navigation/core';

function SignUp ({ setSignChoice }: any)  {
  const navigation = useNavigation();
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const formRef = useRef<FormHandles>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = useCallback(async (data) => {
    try {
      console.log(data)
      await api.post('users', data);
      Alert.alert('Usuário cadastrado com sucesso!');
      setSignChoice('signIn');
    } catch (err) {
      console.log(err);
      Alert.alert('Dados Incorretos foram preenchidos')
    }
  }, []);
  return(
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
      <Input
        label="Nome"
        name="name"
        autoCorrect={true}
        autoCapitalize="words"
        placeholder="Digite seu nome"
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current?.focus()}
      />
      <Input
        label="E-mail"
        name="email"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu E-mail"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
        ref={emailRef}
      />
      <Input
        label="Senha"
        name="password"
        secureTextEntry
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite sua senha"
        returnKeyType="send"
        ref={passwordRef}
        onSubmitEditing={() => {
          formRef.current?.submitForm();
        }}
      />
      </Form>
      <SignUpButton loading={false} onPress={() => {
          formRef.current?.submitForm();
        }}>
        Cadastrar
      </SignUpButton>
    </Container>
  );
}


export default SignUp;
