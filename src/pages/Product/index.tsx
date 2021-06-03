import { useNavigation, useRoute } from '@react-navigation/core';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import React, { useCallback } from 'react';
import { Alert, View } from 'react-native';
import productSrc from '../../assets/qry1f3ky2b451.jpeg';
import {
  Wrapper,
  Container,
  Header,
  ProductPhoto,
  ProductTitle,
  ProductInfoContainer,
  DescriptionTitle,
  Description,
  ProductIngredientsContainer,
  IngredientsTitle,
  IngredientsContainer,
  Ingredient,
  BackButton,
  FavIcon
} from './styles';
import { IProduct } from '../../@types/IProduct';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageFavoriteProps } from '../Favorites';
import { useAuth } from '../../hooks/auth';
import { FlatList } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../theme/colors';

interface ProductPageProps {
  product: IProduct;
}
const Product: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const route = useRoute();
  const { product } = route.params as ProductPageProps;

  const saveToFavorite = useCallback(async () => {
   try {
      const data = await AsyncStorage.getItem('@MyVeganApp:favoritesList');
      const oldFavorites = data ? (JSON.parse(data) as StorageFavoriteProps): {};
      const newProduct = {
        [product.id]: {
          data: product,
        }
      }
      await AsyncStorage.setItem('@MyVeganApp:favoritesList',
        JSON.stringify({
          ...newProduct,
          ...oldFavorites
        })
      );
      Alert.alert('Produto salvo em seus Favoritos');
      navigate('Favorites')
   } catch {
      Alert.alert('Ocorreu um erro ao favoritar produto');
   }
  }, [])
  return (
    <Wrapper>
      <Header>
        <BackButton onPress={() => goBack()}>
            <Entypo name="chevron-left" size={24} color={colors['green-700']} />
        </BackButton>
        <FavIcon onPress={() => saveToFavorite()}>
            <Entypo name="heart" size={24} color={colors['green-700']} />
        </FavIcon>
      </Header>
      <Container contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
        <ProductPhoto
          source={{
            uri: product.thumbnail_url ?
            product.thumbnail_url :
            'https://images.vexels.com/media/users/3/207370/isolated/preview/ebc35faddf377813db3fe854f6542cc7-emblema-de-folhas-verdes-veganas-by-vexels.png'
          }}
        />
        <ProductTitle>{product.name}</ProductTitle>
        <ProductInfoContainer>
          <DescriptionTitle>Descrição</DescriptionTitle>
          <Description>{product.description}</Description>
          {
            product.ingredients?.length > 0 && (
              <>
                <IngredientsTitle>Ingredientes</IngredientsTitle>
                <ProductIngredientsContainer>

                    <FlatList
                      data={product.ingredients}
                      keyExtractor={(item: any) => String(item.id)}
                      renderItem={({item}: any) => (
                        <IngredientsContainer>
                          <Ingredient numberOfLines={1}>- {item.name}</Ingredient>
                        </IngredientsContainer>
                      )}
                      numColumns={2}

                    />
                </ProductIngredientsContainer>
              </>
            )
          }
        </ProductInfoContainer>

      </Container>
    </Wrapper>
  );
}

export default Product;


