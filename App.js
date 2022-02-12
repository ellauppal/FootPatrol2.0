import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PatrolComplete from './pages/PatrolComplete.js';
import FooterMap from './components/FooterMap.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PatrolComplete />
      <FooterMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
