import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import emptyIcon from '../../assets/icons/emptyPlant.png';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Header,
  BackButton,
  Title,
  FavoritesContainer,
  FavoriteCard,
  ProductImage,
  ProductName,
  ActionButtonContainer,
  RemoveItemButton,
  EmptyContainer,
  EmptyImage,
  EmptySectionTitle
} from './styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Alert, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProduct } from '../../@types/IProduct';
import { colors } from '../../theme/colors';


export interface StorageFavoriteProps {
  [id: string]: {
    data: IProduct;

  }
}
const Favorites: React.FC = () => {
  const { goBack } = useNavigation();
  const [favoritesList, setFavorites] = useState<IProduct[]>([]);
  const handleSelectFavorite = ( item: any ) => {
    console.log(item);
  }

  const loadFavorites = async () => {
    const data = await AsyncStorage.getItem('@MyVeganApp:favoritesList');
    const favoritesData = data ? (JSON.parse(data) as StorageFavoriteProps) : {};

    const favoritesDataSorted = Object
    .keys(favoritesData)
    .map(fav => {
      return favoritesData[fav].data
    });

    if(favoritesDataSorted){
      setFavorites(favoritesDataSorted);
    }
  }

  const removeFavorite = async (id: string) => {
    const data = await AsyncStorage.getItem('@MyVeganApp:favoritesList');
    const favorites = data ? (JSON.parse(data) as StorageFavoriteProps) : {};
    delete favorites[id];

    await AsyncStorage.setItem(
      '@MyVeganApp:favoritesList',
      JSON.stringify(favorites)
    );
    loadFavorites();
  }
  useEffect(() => {
    loadFavorites();
  }, [])
  loadFavorites()
  return (
    <Container>
       <Header>
         <Title>Favoritos</Title>
        <BackButton onPress={() => goBack()}>
          <Entypo name="chevron-left" size={24} color={colors['green-700']} />
        </BackButton>
      </Header>
      <FavoritesContainer>
        <SwipeListView
          data={favoritesList}
          renderItem={({item}) => (
            <FavoriteCard activeOpacity={0.9} onPress={() => handleSelectFavorite(item)}>
              <ProductImage source={{uri: item.thumbnail_url ?
              item.thumbnail_url :
              'https://images.vexels.com/media/users/3/207370/isolated/preview/ebc35faddf377813db3fe854f6542cc7-emblema-de-folhas-verdes-veganas-by-vexels.png'
              }}/>
              <ProductName numberOfLines={1}>{item.name}</ProductName>
            </FavoriteCard>
          )}
          renderHiddenItem={ (data, rowMap) => (
            <ActionButtonContainer>
              <RemoveItemButton onPress={() => removeFavorite(data.item.id)}><Entypo name="heart-outlined" size={24} color="#FFF" /></RemoveItemButton>
            </ActionButtonContainer>
          )}
          keyExtractor={(item) => item.id}
          rightOpenValue={-75}
          leftOpenValue={0}
        />
        {
          !favoritesList.length && (
            <EmptyContainer>
              <EmptyImage source={emptyIcon} />
              <EmptySectionTitle>Não existem produtos favoritados no momento</EmptySectionTitle>
            </EmptyContainer>
          )
        }
      </FavoritesContainer>
    </Container>
  );
}

export default Favorites;
