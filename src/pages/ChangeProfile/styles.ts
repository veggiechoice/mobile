import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  justify-content: center;
  padding: 0 20px 100px;
  position: relative;
  /* margin-bottom: 200px; */
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors['green-700']};
  font-family: ${({theme}) => theme.fonts.SFProRounded};
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 100px;
`;

export const PowerButton = styled.TouchableOpacity`
  margin-top: -25px;
  align-self: flex-end;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const ConfirmChangeButton = styled(Button)`
  margin-top: 60px;
  color: #FFF;
`;
