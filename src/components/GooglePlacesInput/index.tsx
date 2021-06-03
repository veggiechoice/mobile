import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Alert, Platform, StyleSheet, TextInputComponent, TextInputProps, View } from 'react-native';
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteProps, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import { useField } from '@unform/core';
import { GooglePlacesExtendedProps, GooglePlacesInputProps } from './@types';

const GooglePlacesInput: React.FC<GooglePlacesInputProps> = (
  {
    name,
    setValue,
    ...rest
  }
) => {
  const inputElementRef = useRef<GooglePlacesAutocompleteRef>(null);
  const handleSelectAddress = useCallback((address: GooglePlacesExtendedProps) => {

    if(!address.types?.includes('establishment')){
      Alert.alert('Atenção!', 'O endereço selecionado não é um endereço comercial!')
      return setValue({});
    }

    if(address.geometry) {
      const { location: { lat: latitude, lng: longitude }} = address.geometry;
      setValue({
        address: address.formatted_address,
        location: {
          type: 'Point',
          coordinates: [latitude, longitude]
        },
        name: address.name,

      });
    }

  }, []);

  return (
    <View style={{ height: 40, position: 'relative' }}>
      <GooglePlacesAutocomplete
        {...rest}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          type: 'supermarket'
        }}
        onPress={(data, details = null) => {

          handleSelectAddress({
            formatted_address: details?.formatted_address,
            geometry: details?.geometry,
            name: details?.name,
            types: details?.types as any
          });
        }}
        styles={inputStyles}
        filterReverseGeocodingByTypes={['establishment', 'food']}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: -19,
    width: '110%',
    marginTop: 2
  },
  textInputContainer: {
    flex: 1,
    height: 54,
    marginHorizontal: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  textInput: {
    backgroundColor: '#F2F2F2',
    height: 54,
    margin: 0,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#999',

  },
  listView: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#F2F2F2',
    marginHorizontal: 20,
    shadowOpacity: 0.1,
    shadowRadius: 15,
    marginTop: 5,
    elevation: 5,
    zIndex: 5,
  },
  description: {
    fontSize: 16
  },
  row: {
    padding: 20,
    height: 58
  }
})
export default GooglePlacesInput;
