import React, { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ItemProps, SelectPickerProps } from './@types';

const SelectPicker: React.FC<SelectPickerProps> = ({
  placeholder,
  items,
  setSelectedItemId
}) => {

  const placeholderObj = {
    label: placeholder,
    value: null,
    color: '#9EA0A4',
  }

  const handleSelect = useCallback((id: string) => {
    setSelectedItemId(id);
  }, [])
  return (
    <RNPickerSelect
      onValueChange={(id) => handleSelect(id)}
      style={pickerSelectStyles}
      items={items || []}
      placeholder={placeholderObj}
    />
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 45,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginTop: 10
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default SelectPicker;
