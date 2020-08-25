import React from 'react';
import { AppLoading } from 'expo';
import { useFonts, ArchitectsDaughter_400Regular,  } from '@expo-google-fonts/architects-daughter';

import Main from './src/pages/Main';

export default function App() {
  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
        <Main />
    );
  }
}
