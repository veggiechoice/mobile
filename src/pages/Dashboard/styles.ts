import styled from 'styled-components/native';
import IconInput from '../../components/IconInput';
import { Form } from '@unform/mobile';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors['grayBackground']};
`;

export const  Header = styled.View`
  padding: 40px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const OpenDrawerButton = styled.TouchableOpacity``;

export const MenuIcon = styled.Image``;

export const ProfileButton = styled.TouchableOpacity``;

export const ProfileImage = styled.Image`
  border-radius: 40px;
  width: 54px;
  height: 54px;
`;

export const  Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors['grayBackground']};
  border-bottom-width: 0;
`;

export const TitleContainer = styled.View`
  padding: 0 40px;
`;

export const  Title = styled.Text`
  font-family:  ${({ theme }) => theme.fonts['SFProRoundedBold']};
  font-size: 34px;
  color: #606C38;
  line-height: 41px;
  max-width: 300px;
  margin-bottom: 30px;
`;



export const  CategoryScrollList = styled.FlatList`
  padding: 15px 0px;
`;


interface CategoryViewTextProps {
  isSelected: boolean;
}

export const CategoryViewContainer = styled.TouchableOpacity<CategoryViewTextProps>`
  margin: 0 10px;
  height: 50px;
  width: 90px;
  justify-content: center;
  align-items: center;
  border-bottom-width: ${props  => props.isSelected ? '4px' : '0px'};
  border-bottom-color: ${({ theme }) => theme.colors['green-500']};
`;


export const CategoryViewText = styled.Text.attrs({
  numberOfLines: 1
})<CategoryViewTextProps>`
  font-family:  ${({ theme }) => theme.fonts['SFProText']};
  font-size: 16px;
  color:  ${({ theme }) => theme.colors['green-700']};
  opacity: ${props => props.isSelected ? '1' : '0.5'};
`

export const ProductScrollList = styled.FlatList`
  padding: 0 20px;
`;
