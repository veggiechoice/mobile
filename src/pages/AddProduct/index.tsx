import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useIsFocused, useNavigation } from '@react-navigation/core';
import { Form } from '@unform/mobile';
import {
  Wrapper,
  Container,
   Header,
   BackButton,
   SaveProductButton,
   SaveProductLabel,
   BrandContainer,
   ImagePickerContainer,
   CategoryContainer,
   IngredientsContainer,
   Label,
   LocationContainer,
   FormContainer,
   ListContainer,
   NestView
} from './styles';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import ImagePicker from '../../components/ImagePicker';
import { ImageFileProps } from '../../@types/IImageFile';
import api from '../../services/api';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, TextInputComponent, TextInputProps, View } from 'react-native';
import { IIngredient } from '../../@types/IIngredient';
import { ICategories } from '../../@types/ICategories';

import GooglePlacesInput from '../../components/GooglePlacesInput';
import { ScrollView } from 'react-native-gesture-handler';
import SelectPicker from '../../components/SelectPicker';
import MultiselectComponent from '../../components/Multiselect';
import { ItemProps } from '../../components/SelectPicker/@types';
import { IBrand } from '../../@types/IBrand';
import { GooglePlacesExtendedProps } from '../../components/GooglePlacesInput/@types';
import { Load } from '../Load';
import { colors } from '../../theme/colors';


const AddProduct: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const multiSelectRef = useRef<any>();
  const [formData, setFormdata] = useState<FormData>(new FormData());

  const [formState, setFormState] = useState<'PRODUCT_INFO' | 'PRODUCT_CATEGORY'>('PRODUCT_INFO');
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState<ImageFileProps>({} as ImageFileProps);
  const [ingredientSelectedItems, setIngredientSelectedItems] = useState<string[]>([]);
  const [categoriesItemList, setCategoriesItemList] = useState<ItemProps[]>([]);
  const [brandItemList, setBrandItemList] = useState<ItemProps[]>([]);

  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [location, setLocation] = useState<GooglePlacesExtendedProps>({} as GooglePlacesExtendedProps);;

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [selectedBrandId, setSelectedBrandId] = useState<string>('');

  const isFocused = useIsFocused();


  useEffect(() => {
      setLoading(true);
      fetchIngredients();
      fetchCategories();
      fetchBrands();
      setLoading(false);
  }, [])



  useEffect(() => {
    setSelectedBrandId("")
    setImage({} as ImageFileProps)
    setSelectedCategoryId("")
    if(isFocused) {
      fetchIngredients();
      fetchCategories();
      fetchBrands();
    }
  }, [isFocused])


  const changeSelectLabelFunction = () => {
    return formState === 'PRODUCT_INFO' ? 'Salvar Alteraçōes' : 'Salvar';
  }

  const fetchIngredients = useCallback(async () => {
    try {
      const response = await api.get('ingredients', {
        params: {
          _isVegan: true,
        }
      });

      const { row } = response.data;
      setIngredients(row);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    // Alert.alert('Fetching Categories!');
    try {
      const response = await api.get('categories');

      const { row } = response.data;
      setCategories(row);
      setCategoriesItemList(categories.map(el => {
        return {
          label: el.name,
          value: el.id
        }
      }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchBrands = useCallback(async () => {

    try {
      const response = await api.get('brands');

      const { data } = response;

      setBrands(data);

      setBrandItemList(brands.map(el => {
        return {
          label: el.name,
          value: el.id
        }
      }));
      console.log(brandItemList);


    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async (data: any) => {
    try {

      if(!image) {
        Alert.alert('Adicione uma imagem ao produto!');
      }
      formData.append('images', image as any);
      formData.append('isVegan', 'true');
      formData.append('ingredients', ingredientSelectedItems.toString());

      if(selectedCategoryId) {
        formData.append('category', JSON.stringify({
          id: selectedCategoryId
        }));
      }

      setLoading(true);
      await api.post('products', formData, {
        headers: {
          'content-type': 'multipart/form-data',
        }
      });

      setLoading(false);
      clearFields();
      navigate('Dashboard');
      Alert.alert('Seu produto foi cadastrado, aguarde a avaliação de nossa equipe!')
    } catch (error) {
      clearFields();
      Alert.alert('Erro Ao cadastrar produto!');
    }


  }


  const onSelectedIngredientsChange = (items: any) => {
    setIngredientSelectedItems(items)
  }

  const handleSaveSelected = () => {
    if(formState === 'PRODUCT_INFO') {
      if(formRef.current) {
        const { name, description } = formRef.current.getData();
        if(!name) {
          Alert.alert('Nome do produto é obrigatório!');
          return;
        }

        if(!description) {
          Alert.alert('Descrição do produto é obrigatório!');
          return;
        }
        formData.append('description', description);
        formData.append('name', name);
        formData.append('location', JSON.stringify(location) || "");

        setFormState('PRODUCT_CATEGORY');
      }
    }
    else {
      formRef.current?.submitForm();
    }
  }

  const handleGoBack = () => {
    if(formState ===  'PRODUCT_CATEGORY') {
       setFormState('PRODUCT_INFO');
    }
    else {
      goBack();
    }

  }

  const clearFields = useCallback(() => {
    setFormdata(new FormData());
    setFormState('PRODUCT_INFO');
    setImage({} as ImageFileProps);
    setIngredientSelectedItems([]);
    setLocation({} as any);
  }, [])

  if(loading) {
    return <Load/>
  }

  return (
    <Wrapper>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
          nestedScrollEnabled={true}
        >
          <NestView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'position' : 'position'}
            enabled
          >
          <Container>
            <Header>
              <BackButton onPress={() => handleGoBack()}>
                <Entypo name="chevron-left" size={24} color={colors['green-700']} />
              </BackButton>
              <SaveProductButton onPress={() => handleSaveSelected()}>
                <SaveProductLabel>{changeSelectLabelFunction()}</SaveProductLabel>
              </SaveProductButton>
            </Header>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <ImagePickerContainer>
                <ImagePicker image={image} setImage={setImage} />
              </ImagePickerContainer>
                {
                  formState === 'PRODUCT_INFO' ? (
                    <FormContainer>
                      <LocationContainer>
                        <Label>Onde podemos encontrar este produto?</Label>
                        <GooglePlacesInput
                          name="locationInput"
                          query={{
                            key: 'AIzaSyDJN19Ly_KJbFadTAWL_d1SxzaAbbrTdQ0',
                            language: 'pt'
                          }}
                          fetchDetails={true}
                          enablePoweredByContainer={false}
                          placeholder="Busque um endereço..."
                          autoFillOnNotFound
                          setValue={setLocation}
                          nearbyPlacesAPI="GooglePlacesSearch"
                        />
                      </LocationContainer>
                      <Input
                        label="Nome: "
                        name="name"
                        autoCorrect={true}
                        autoCapitalize="words"
                        placeholder="Digite o nome do produto"
                        returnKeyType="next"
                      />
                      <Input
                        label="Descrição: "
                        name="description"
                        autoCorrect={true}
                        autoCapitalize="sentences"
                        placeholder="Digite uma breve descrição do produto..."
                        returnKeyType="next"
                        isBigInput
                      />
                    </FormContainer>
                  ) : (
                    <FormContainer>
                      <IngredientsContainer>
                        <Label>Ingredientes</Label>
                        <MultiselectComponent
                          items={ingredients}
                          selectedItems={ingredientSelectedItems}
                          onSelectedItemsChange={onSelectedIngredientsChange}
                          selectPlaceholder="Selecione os Ingredientes"
                          height={60}
                          recognizeButtonVisible={true}
                          multiSelectRef={multiSelectRef}
                        />
                      </IngredientsContainer>
                      <BrandContainer>
                        <Label>Marca</Label>
                        <SelectPicker
                          placeholder="Selecione uma marca"
                          items={brandItemList}
                          setSelectedItemId={setSelectedBrandId}
                        />
                      </BrandContainer>

                      <CategoryContainer>
                        <Label>Categoria</Label>
                        <SelectPicker
                          placeholder="Selecione uma categoria"
                          items={categoriesItemList}
                          setSelectedItemId={setSelectedCategoryId}
                        />
                      </CategoryContainer>

                      <ListContainer>
                        {
                          multiSelectRef.current ?
                          multiSelectRef.current.getSelectedItemsExt(ingredientSelectedItems) :
                          null
                        }
                      </ListContainer>
                    </FormContainer>
                  )
                }
            </Form>
          </Container>
        </NestView>
      </ScrollView>
    </Wrapper>
  );
}

export default AddProduct;
