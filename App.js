import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
