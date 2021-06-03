import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 40px;
  padding: 10px 0;
`;

export const Header = styled.View`
  position: relative;
  padding: 15px;
  align-items: center;
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
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 41px;
  color: ${({theme}) => theme.colors['green-700']};
`;

export const FavoritesContainer = styled.View`
  padding: 40px 0;
  align-items: center;
`;
export const FavoriteCard = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 20px;
  padding: 10px;
  width: 315px;
  height: 102px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  background: ${({theme}) => theme.colors['neutral-100']};
  border-radius: 20px;
  position: relative;
`;
export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 77px;
`;
export const ProductName = styled.Text`
  margin-left: 20px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  max-width: 60%;
`;

export const ActionButtonContainer = styled.View`
  position: absolute;
  right: 0;
  top: 40%;

`;

export const RemoveItemButton = styled(RectButton)`
  width: 45px;
  height: 45px;
  background: #DF2C2C;
  border-radius: 25px;
  align-items:center;
  justify-content: center;

`;

export const EmptyContainer = styled.View`
  padding: 30px;
  align-items: center;
`;

export const EmptySectionTitle = styled.Text`
  flex: 1;
  font-family:  ${({ theme }) => theme.fonts['SFProTextSemibold']};
  opacity: 0.4;
  text-align: center;
  font-size: 15px;
  line-height: 18px;
`;

export const EmptyImage = styled.Image`
  margin: -60px 0;
  opacity: 0.5;
`;
