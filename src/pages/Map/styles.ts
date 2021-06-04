import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native';


export const Container = styled(LinearGradient).attrs({
  colors: ['#606C38', '#215B39'],
})`
`;

export const Header = styled.View`

  position: relative;
  padding: 30px;
  align-items: center;
`;
export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 10%;
  margin-top: 65px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.SFProTextSemibold};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  max-width: 150px;
  text-align: center;
  margin-top: 20px;
  color: ${({theme}) => theme.colors['neutral-100']};
`;

export const MapContainer = styled.View`
  flex: 1;
`;
