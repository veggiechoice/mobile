import styled from 'styled-components/native';
import Button from '../../components/Button';
  import IconInput from '../../components/IconInput';
  import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView.attrs({
  showsVerticalScrollIndicator: false
})`
  align-items: center;
  justify-content: center;
  flex: 1;

`;

export const Wifi = styled.View`
  align-items: center;
`;

export const WifiIcon = styled(Feather)`
  margin-bottom: 20px;
`;

export const WifiText = styled.Text`
  font-size: 20px;
  padding: 10px 15px;
  font-family: ${({theme}) => theme.fonts.SFProTextSemibold};
`;

export const WifiTextSmall = styled.Text`
  font-family: ${({theme}) => theme.fonts.SFProText};
  font-size: 14px;
`;

export const TryAgainButtonView = styled.View`
  height: 42px;
  width: 120px;
  border-bottom-color: ${({ theme }) => theme.colors['green-500']};
`;

export const TryAgainButton = styled.TouchableOpacity`
`;

export const  TryAgainButtonText = styled.Text`
  font-size: 18px;
  line-height: 21px;
  font-family:  ${({ theme }) => theme.fonts['SFProRounded']};
  font-weight: bold;
`;

export const ButtonTryAgain = styled(Button)`
 margin-top: 60px;
 width: 90%;
`;
