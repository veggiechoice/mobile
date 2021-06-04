import MultiSelect from 'react-native-multiple-select';
import styled from 'styled-components/native';
import { fonts } from '../../theme/fonts';


export const NestView = styled.KeyboardAvoidingView`
  flex:1;
`;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  position: relative;
`;



export const Container = styled.View`
  justify-content: center;
  padding: 0 20px 100px;
  position: relative;
`;

export const FormContainer = styled.View`

`;

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: transparent;
  padding: 5px 5px 0 5px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 50px;
`;


export const SaveProductButton = styled.TouchableOpacity`
  margin-top: -25px;
  align-self: flex-end;
`;
export const SaveProductLabel = styled.Text``;

export const ImagePickerContainer = styled.View`
  margin-top: 32px;

`;





export const InfoContainer = styled.ScrollView`
  padding: 35px 0 0 0;
`;

export const Label = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #000;
  opacity: 0.4;
  font-family:  ${({ theme }) => theme.fonts['SFProText']};
`;


export const CategoryContainer = styled.View`
  margin-top: 10px;
`;

export const BrandContainer = styled.View`
  margin-top: 20px;
`;


export const IngredientsContainer = styled.View`
  margin-top: 15px;
`;
export const LocationContainer = styled.View`
  margin-top: 20px;
`;

export const ListContainer = styled.View`
  margin-top: 10px;
  width: 100%;

`;
