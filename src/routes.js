import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Main from './pages/Main';
import Book from './pages/Book';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main" component={Main}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS
          }}
        />
        <Stack.Screen name="Book" component={Book}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS
          }}
        />
      </Stack.Navigator>  
    </NavigationContainer>
  )
}