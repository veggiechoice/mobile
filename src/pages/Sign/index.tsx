import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import SignIn from './SignIn';
import { Container, Logo, Hero, ButtonsContainer, SignButton, SignButtonText, SignButtonView, Wrapper } from './styles';
import logoSrc from '../../assets/logo/logo.gif';

type SignEnumProps = 'signIn' | 'signUp';

const Sign: React.FC = () => {
  const [signChoice, setSignChoice] = useState<SignEnumProps>('signIn');
  return (
    <Container>
      <Hero>
        <Logo source={logoSrc}/>
        <ButtonsContainer>
          <SignButton onPress={() => setSignChoice('signIn')}>
            <SignButtonView isActive={signChoice === 'signIn'}>
              <SignButtonText>Login</SignButtonText>
              </SignButtonView>
            </SignButton>
          <SignButton onPress={() => setSignChoice('signUp')}>
            <SignButtonView isActive={signChoice === 'signUp'}>
              <SignButtonText>Cadastrar</SignButtonText>
            </SignButtonView>
            </SignButton>
        </ButtonsContainer>
      </Hero>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={5}
        enabled
      >
        <Wrapper>
          {
            signChoice === 'signIn' ?
            (<SignIn />) :
            (<SignUp setSignChoice={setSignChoice} />)
          }
        </Wrapper>
      </KeyboardAvoidingView>
    </Container>
  );
}

export default Sign;
