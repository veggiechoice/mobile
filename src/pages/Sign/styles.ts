import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
`;

export const Hero = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors['neutral-100']};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  height: 302px;
  border-radius: 40px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);

`;

export const Title = styled.Text`
  font-family:  ${({ theme }) => theme.fonts['SFProRoundedBold']};
  font-size: 60px;
  color: #606C38;
  line-height: 65px;
  max-width: 300px;

`;

export const Logo = styled.Image`
  width: 200px;
  height: 150px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
`;


interface SignButtonViewProps {
  isActive: boolean;
}
export const SignButtonView = styled.View<SignButtonViewProps>`
  height: 42px;
  width: 120px;
  margin-bottom: -70px;
  align-items: center;
  border-bottom-width: ${props  => props.isActive ? '4px' : '0' };
  border-bottom-color: ${({ theme }) => theme.colors['green-500']};
`;

export const  SignButton = styled.TouchableOpacity`
  height: 30px;
`;
export const  SignButtonText = styled.Text`
  font-size: 18px;
  line-height: 21px;
  font-family:  ${({ theme }) => theme.fonts['SFProRounded']};
  font-weight: bold;
`;

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  padding: 20px;
`;
