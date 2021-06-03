import React, { ReactNode, useState } from 'react';


import { Container, ProductImage, ProductImageFilled } from './styles';
import cameraIcon from '../../assets/icons/camera.png';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
import { ImageFileProps } from '../../@types/IImageFile';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface ImagePickerComponentProps {
  setImage: React.Dispatch<React.SetStateAction<ImageFileProps>>;
  image: ImageFileProps;
}
function ImagePickerComponent({ image, setImage }: ImagePickerComponentProps) {

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      allowsMultipleSelection: true
    }) as any;

    if (!result.cancelled) {
      let localUri = result.uri;
      let filename = localUri.split('/').pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      setImage({
        name: filename,
        uri: localUri,
        type: type
      });
    }
  };
  return (
    <Container onPress={pickImage} activeOpacity={0.7}>
      {
        image.uri ? (
          <ProductImageFilled source={{ uri: image.uri }} />
        ) : (
          <MaterialCommunityIcons name="camera-plus" size={74} color="#000" />
        )
      }
    </Container>
  );
};

export default ImagePickerComponent;
