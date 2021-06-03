import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Text } from './styles';

export default function Button({ children, loading, color,  ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text color={color}>{children}</Text>
      )}
    </Container>
  );
}
