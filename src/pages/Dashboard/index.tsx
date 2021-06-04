import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import menuIconSrc from '../../assets/icons/menu.png';
import emptyIcon from '../../assets/icons/emptyPlant.png';
import nouserSrc from '../../assets/noAvatar.png';
import {
  Wrapper,
  Header,
  OpenDrawerButton,
  MenuIcon,
  ProfileButton,
  ProfileImage,
  Container,
  TitleContainer,
  Title,

  ProductScrollList,
  CategoryScrollList,
  CategoryViewContainer,
  CategoryViewText
 } from './styles';
import { DrawerActions, useIsFocused, useNavigation } from '@react-navigation/core';
import { useAuth } from '../../hooks/auth';
import { EmptyContainer, EmptyImage, EmptySectionTitle } from '../../components/Input/styles';
import { IProduct } from '../../@types/IProduct';
import api from '../../services/api';
import { Load } from '../Load';
import { ICategories } from '../../@types/ICategories';
import { IProductFilterParams } from '../../@types/IFilters';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import IconInput from '../../components/IconInput';
import { IBrand } from '../../@types/IBrand';


const Dashboard: React.FC = () => {
  const { dispatch, navigate } = useNavigation();
  const { user } = useAuth();
  const [brandList, setBrands] = useState<IBrand[]>([]);
  const [selected, setSelected] = useState<IBrand>({} as any);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const isFocused = useIsFocused();
  const formRef = useRef<FormHandles>(null);

  const [productParams, setProductParams] = useState<IProductFilterParams>({
    _sort: 'createdAt',
    _order: 'DESC',
    _brandId: "",
    _limit: 7
  } as IProductFilterParams)

  const openToggleBrower = useCallback(() => {
   dispatch(DrawerActions.openDrawer);
  }, []);

  const renderBrands = ({item}: any) => {
    return (
      <CategoryViewContainer key={item.id} onPress={() => handleSelectBrand(item)} isSelected={item.id === selected?.id}>
        <CategoryViewText isSelected={item.id === selected?.id}>{item.name}</CategoryViewText>
      </CategoryViewContainer>
    )
  }

  const fetchProducts = async () => {
    try {
      // setLoading(true);

      const response = await api.get('products', {
        params: productParams
      })

      setProducts(response.data);

    } catch (error) {
      console.log(error)
    }
  }

  const fetchBrands = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('brands');
      setBrands(response.data);
      setSelected(response.data[0]);
      setProductParams({
        _brandId: response.data[0].id,
        _limit: 7
      } as any);
    } catch (error) {
      console.log(error)
    }
  }, []);

  const handleSelectBrand = async (item: IBrand) => {
    setSelected(item);
    setProductParams({
      _brandId: item.id,
      _limit: 7
    } as any);
    fetchProducts();
  }

  const handleSubmitSearch = useCallback(({search}: string) => {
    navigate('SearchPage', { search });
    formRef.current?.reset();
  }, []);
  useEffect(() => {
    setLoading(true);
    fetchBrands();
    fetchProducts();
    setTimeout(() => {
      setLoading(false);
    }, 700)
  }, [isFocused]);

  function getUserAvatar() {
    if(user.avatar_url){
      if(user.avatar_url === 'https://veggiechoice.herokuapp.com/null') {
        return nouserSrc;
      }
      return { uri: user.avatar_url };
    } else {
      return nouserSrc;
    }
  }
  if(loading) {
    return <Load />
  }

  return (
    <Wrapper>
      <Header>
        <OpenDrawerButton onPress={() => openToggleBrower()} >
          <MenuIcon source={menuIconSrc}/>
        </OpenDrawerButton>
        <ProfileButton onPress={() => navigate('Perfil')}>
          <ProfileImage source={getUserAvatar()}/>
        </ProfileButton>
      </Header>
      <Form
          onSubmit={handleSubmitSearch}
          ref={formRef}
          style={{flex: 1, width: '100%'}}
        >
      <Container
        showsVerticalScrollIndicator={false}
      >
          <TitleContainer>
            <Title>Produtos Recomendados</Title>
            <IconInput
              name="search"
              icon="search"
              placeholder="Digite sua busca"
              onSubmitEditing={() => formRef.current?.submitForm()}
              returnKeyType="search"
            />
            <CategoryScrollList
                data={brandList}
                renderItem={renderBrands}
                horizontal
                showsHorizontalScrollIndicator={false}
                extraData={selected}
            />
          </TitleContainer>
        <ProductScrollList
            data={products}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <ProductCard product={item as IProduct}/>}
            ListEmptyComponent={() => (
              <EmptyContainer>
              <EmptyImage source={emptyIcon} />
              <EmptySectionTitle>Não existem produtos disponíveis no momento</EmptySectionTitle>
            </EmptyContainer>
            )}
          >
        </ProductScrollList>
      </Container>
      </Form>
    </Wrapper>
  );
}



export default Dashboard;
