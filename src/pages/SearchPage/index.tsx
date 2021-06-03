import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { IProduct } from '../../@types/IProduct';
import ProductCard from '../../components/ProductCard';
import api from '../../services/api';
import { colors } from '../../theme/colors';
import { Load } from '../Load';

import { BackButton, Container, Header, Title, ContentContainer, SearchResultTitle } from './styles';
interface Params {
  search: string;
}
const SearchPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const {goBack} = useNavigation();
  const route = useRoute();
  const { search } = route.params as Params;
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('products', {
        params: {
          _search: search
        }
      })
      setProducts(response.data);

      setLoading(false);

    } catch (error) {
      console.log(error)
    }
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [])
  if(loading) {
    return <Load />
  }
  return (
    <Container>
      <Header>
        <Title>{search}</Title>
        <BackButton onPress={() => goBack()}>
          <Entypo name="chevron-left" size={24} color={colors['green-700']} />
        </BackButton>
      </Header>

      <SearchResultTitle> {products.length} Resultados Encontrados</SearchResultTitle>
      <ContentContainer>
        <FlatList
          data={products}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({item}: any) => (
            <ProductCard size="small" product={item as IProduct} />
          )}
          numColumns={2}
          contentContainerStyle={{ paddingVertical: 30, marginBottom: 200}}
          showsVerticalScrollIndicator={false}
        />

      </ContentContainer>
    </Container>
  );
}

export default SearchPage;
