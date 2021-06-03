import React from 'react';
import { View } from 'react-native';

import { Container, ContentWrapper, HeaderText, Logo, BeginButton } from './styles';
import logoSrc from '../../../assets/logo.png';
const Onboarding: React.FC = () => {
  return (
    <Container>
        <HeaderText>Food for Everyone</HeaderText>
        <ContentWrapper>
            <Logo source={logoSrc} />
            <BeginButton >Comecar</BeginButton>
        </ContentWrapper>
    </Container>
  );
}

export default Onboarding;