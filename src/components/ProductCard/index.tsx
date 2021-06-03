import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { IProduct } from '../../@types/IProduct';

import { Container, ProductImage, ProductName } from './styles';

interface ProductCardProps {
  product: IProduct;
  size?: 'small' | 'big';
}
const ProductCard: React.FC<ProductCardProps> = ({ product, size = 'big' }) => {
  const { dispatch, navigate } = useNavigation();
  const { name, thumbnail_url } = product;

  const handleNavigate = () => {
    navigate('Product', {product})
  }
  return (
    <Container
      onPress={() => handleNavigate()} activeOpacity={0.6}
      size={size}
    >
      <ProductImage
        size={size}
        source={{
          uri: thumbnail_url ?
          thumbnail_url :
          'https://images.vexels.com/media/users/3/207370/isolated/preview/ebc35faddf377813db3fe854f6542cc7-emblema-de-folhas-verdes-veganas-by-vexels.png'}}
      />
      <ProductName
      size={size}
      numberOfLines={2}>{name}</ProductName>
    </Container>
  );
}

export default ProductCard;
