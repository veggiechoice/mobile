import React from 'react';
import LottieView from 'lottie-react-native';
import loadAnimation from '../../assets/animations/load.json';
import { View, StyleSheet } from 'react-native';


function Load() {
  return (
    <View style={styles.container}>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200
  }
});
export { Load };
