import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { veganAppTheme } from './src/theme';
import { AppProvider } from './src/hooks';
import Routes from './src/routes';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNetInfo } from "@react-native-community/netinfo";
import NoConnection from './src/pages/NoConnection';
import { useAuth } from './src/hooks/auth';
import { Load } from './src/pages/Load';
import { LogBox } from 'react-native';

// Only for presentation
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const fetchFonts = () => {
  return Font.loadAsync({
  'SF-Pro-Rounded': require('./assets/fonts/SF-Pro-Rounded.ttf'),
  'SF-Pro-Text': require('./assets/fonts/SF-UI-Text-Regular.ttf'),
  'SF-Pro-Rounded-Bold': require('./assets/fonts/SF-Pro-Rounded-Bold.ttf'),
  'SFProText-Bold': require('./assets/fonts/SFProText-Bold.ttf'),
  'SFProText-Semibold': require('./assets/fonts/SFProText-Semibold.ttf')
  });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const netInfo = useNetInfo();

  if(!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => {}}
      />
    )
  }
  return (
    <NavigationContainer>
      <AppProvider>
        <StatusBar barStyle="dark-content" />
        <ThemeProvider theme={veganAppTheme}>
          <View style={{ flex: 1, backgroundColor: '#F6F6F9' }}>
            {
              netInfo.isConnected ? <Routes /> : <NoConnection />
            }
          </View>
        </ThemeProvider>
      </AppProvider>
    </NavigationContainer>
  );
}


