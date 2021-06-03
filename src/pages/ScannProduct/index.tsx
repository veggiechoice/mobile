import {StatusBar} from 'expo-status-bar'
import React, { useEffect, useRef, useState } from 'react'
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert, Platform} from 'react-native'
import { Camera } from 'expo-camera';
import axios from 'axios';
import api from '../../services/api';
import { Load } from '../Load';
import * as MediaLibrary from 'expo-media-library';
import { ImageFileProps } from '../../@types/IImageFile';
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused, useNavigation } from '@react-navigation/core';

interface ScannPageProps {
  isLongPressed: boolean
}
export default function ScannPage({ isLongPressed = false }:ScannPageProps) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [loading, setLoading] = useState(false);
  const [capturedImage, setCapturedImage] = useState<any>({});


  useEffect(() => {
    if(isFocused)
      if(isLongPressed){
        __startCamera();
      }
      else {
        pickImage();
      }
  }, [isFocused]);

  const __startCamera = async () => {

    const {status} = await Camera.requestPermissionsAsync()
    if (status === 'granted') {
      const photo = await ImagePicker.launchCameraAsync();
      if(!photo.cancelled) {
        setCapturedImage(photo);
        MediaLibrary.saveToLibraryAsync(photo.uri);
        pickImage();
      }
      else {
        navigation.navigate('Home');
      }

    } else {
      Alert.alert('Access denied')
    }
  }
  const __sendToServer = async () => {
    try {
      if(capturedImage.uri !== null) {
        let formData = new FormData();

        let filename = capturedImage.uri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename || '');
        let type = match ? `image/${match[1]}` : `image`;


        formData.append('ingredients', capturedImage as any);

        setLoading(true);
        api.defaults.timeout = 60000;
        const response = await api.post('ingredients/scan', formData, {
          params: {_scan: true},
          headers: {
            "Content-Type": "multipart/form-data;"
          }
        });

        const { isVegan } = response.data;

        if(isVegan) {
          navigation.navigate('Home');
          Alert.alert('Este produto é potencialmente vegano', 'Não foi identificado nenhum ingrediente de origem animal!');
        } else {
          navigation.navigate('Home');
          Alert.alert('Este produto não é vegano', 'Este produto contém certos ingredientes de base animal.');
        }

        setLoading(false);
      }
    } catch (error) {
      pickImage();
      setLoading(false);
      navigation.navigate('Home');

    }

  }

  const pickImage = async () => {
    try {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: false
      }) as any;

      if (!result.cancelled) {
        let localUri = result.uri;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        setCapturedImage({
          name: filename,
          uri: localUri,
          type: type
        });
        // console.log(capturedImage);
        __sendToServer();
      } else {
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('Não foi possível verificar este produto, tire a foto novamente');
      console.log(error)
      setLoading(false);
      navigation.navigate('Home');
    }
  };

  if(loading) {
    return <Load />
  }

  return (
    <View />
  )
}

