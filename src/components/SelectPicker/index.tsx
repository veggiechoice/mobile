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
    height: 45,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginTop: 10
  },
});
export default SelectPicker;
