import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { Alert } from 'react-native';

import { colors } from '../../theme/colors';

import {
  Container,
  WifiIcon,
  WifiText,
  WifiTextSmall,
  ButtonTryAgain
} from './styles';

const NoConnection: React.FC = () => {

  return (
    <Container>
        <WifiIcon name="wifi-off" size={100} color="#C7C7C7" />
        <WifiText>Parece que você está sem conexão</WifiText>
        <WifiTextSmall>Verifique sua internet e tente outra vez...</WifiTextSmall>
    </Container>
  );
}

export default NoConnection;
