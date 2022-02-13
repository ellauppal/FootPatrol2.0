import { StyleSheet, Text, View } from 'react-native';
import MapPage from './pages/MapPage';
import WaitingPage from './pages/WaitingPage';
import WaitingPage2 from './pages/WaitingPage2';
import PaMap from './pages/PaMap';
import PaList from './pages/PaList';
import DeTaskView from './pages/DeTaskView';
import PaHeading from './pages/PaHeading';
import PaComplete from './pages/PaComplete';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <PaHeading></PaHeading>
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
