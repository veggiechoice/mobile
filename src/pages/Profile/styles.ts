import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 40px;
  padding: 10px 0;
`;

export const Header = styled.View`
  padding: 15px;
`;
export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
`;
export const Body = styled.View`
  padding: 20px 20px ;
`;
export const Title = styled.Text`
  margin-left: 20px;
  font-family: ${({theme}) => theme.fonts.SFProTextSemibold};
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  color: ${({theme}) => theme.colors['green-700']};
`;
export const DetailsContainer = styled.View`
  margin: 40px 0px 20px 0px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.SFProTextSemibold};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${({theme}) => theme.colors['green-700']};
`;
export const AlertButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;
export const AlertButtonText = styled.Text``;
export const AlterButton = styled.Text``;
export const AlterButtonText = styled.Text``;
export const PersonalInfoContainer = styled.View`
  flex-direction: row;
  width: 315px;
  height: 197px;
  background: ${({theme}) => theme.colors['neutral-100']};
  padding: 20px;
  align-self: center;
  border-radius: 20px;
`;
export const ProfileImage = styled.Image`
  width: 91px;
  border-radius: 10px;
  height: 101px;
`;
export const PersonalInfo = styled.View`
  margin: 20px 0 0 14px;
  max-width: 180px;
`;
export const ProfileName = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: ${({theme}) => theme.colors['green-700']};
  font-family: ${({theme}) => theme.fonts.SFProTextSemibold};
  font-weight: 600;

`;
export const PersonalInfoDivisor = styled.View`
  border: 1px solid #EEE;
  margin: 6px 0;
`;

export const ProfileEmail = styled.Text`
  margin-top: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  font-family: ${({theme}) => theme.fonts.SFProText};
  opacity: 0.5;

`;
export const ProfilePhone = styled.Text`
   font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  font-family: ${({theme}) => theme.fonts.SFProText};
  opacity: 0.5;
`;
export const ProfileAddress = styled.Text.attrs({
  numberOfLines: 2
})`
 font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  font-family: ${({theme}) => theme.fonts.SFProText};
  opacity: 0.5;
`
;

export const ProfileMenuContainer = styled.View`
  padding: 20px;
  align-items: center;
`
export const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 315px;
  height: 60px;
  background: ${({theme}) => theme.colors['neutral-100']};
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
`;
export const MenuButtonText = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${({theme}) => theme.colors['green-700']};
`
