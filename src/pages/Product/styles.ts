import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
  padding: 30px;
`;
export const Container = styled.ScrollView`
  margin-top: 5px;
  padding: 30px;
`;

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: transparent;
  padding: 15px 20px;
`;


export const ProductPhoto = styled.Image`
  width: 241px;
  height: 241px;
  border-radius: 125px;
  margin-bottom: 30px;
`;

export const ProductTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts['SFProRoundedBold']};
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  text-align: center;

  color: #000;
`;

export const ProductInfoContainer= styled.View`
  margin-top: 40px;
  width: 100%;
  margin-bottom: 300px;
`;

export const DescriptionTitle= styled.Text`
  font-family: ${({theme}) => theme.fonts['SFProRoundedBold']};
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
`;

export const Description= styled.Text`
  margin-top: 10px;
  font-family: ${({theme}) => theme.fonts['SFProText']};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #000;
  opacity: 0.5;
`;

export const ProductIngredientsContainer= styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

export const IngredientsTitle= styled.Text`
  margin-top: 10px;
  align-self: flex-start;
  font-family: ${({theme}) => theme.fonts['SFProRoundedBold']};
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
`;

export const IngredientsContainer= styled.View`
  flex:1;
  justify-content: space-between;
`;

export const Ingredient= styled.Text`
  font-family: ${({theme}) => theme.fonts['SFProText']};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #000;
  opacity: 0.5;
`;

export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  /* position: absolute; */
  /* left: 10%;
  margin-top: 25px; */
`;

export const FavIcon = styled.Text`
  height: 40px;
  width: 40px;
  position: absolute;
  right: 2px;
  margin-top: 25px;
`;
