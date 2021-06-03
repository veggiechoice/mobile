import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex:1;

`;

export const Header = styled.View`
  position: relative;
  padding: 15px;

`;

export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 10%;
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.SFProTextSemibold};

  margin-left: 80px;
  margin-top: 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  padding: 5px;
  background: #F9F9F9;
  flex:1;
  border-top-right-radius:  30px;
  border-top-left-radius:  30px;
`;

export const SearchResultTitle = styled.Text`
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  font-family:  ${({ theme }) => theme.fonts['SFProRoundedBold']};
  font-size: 34px;
  color: #606C38;
  line-height: 41px;
`;
