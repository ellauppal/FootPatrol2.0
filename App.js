import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PatrolToStart from './pages/PatrolToStart.js';
import FooterMap from './components/FooterMap.js';
import Image from './assets/image.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PatrolToStart firstName="Victoria" lastName="Da Rosa" minutesAway="10" patrolleeImage={Image} />
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
