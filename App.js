import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, ArchitectsDaughter_400Regular,  } from '@expo-google-fonts/architects-daughter';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
        <>
          <StatusBar backgroundColor="#F2F089" barStyle="dark-content"/>
          <Routes />
        </>
    );
  } 
}
