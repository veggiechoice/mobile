import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  background: ${({theme}) => theme.colors["green-700"]};
  padding: 40px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export const ContentWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-family: ${({theme}) => theme.fonts.SFProRoundedBold};
  font-style: normal;
  font-weight: 800;
  font-size: 65px;
  line-height: 60.84px;
  text-align: left;
  /* or 56px */
  color: #FFF;
`;

export const  Logo = styled.Image`

`;

export const  BeginButton = styled(Button)`
  background: ${({theme}) => theme.colors["neutral-100"]};
  color:  ${({theme}) => theme.colors["green-700"]};
  width: 300px;
`;
