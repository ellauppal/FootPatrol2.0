import { StyleSheet, Text, View } from 'react-native';
import MapPage from './pages/MapPage';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  
  return (
    <NavigationContainer>
        <MapPage></MapPage>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
