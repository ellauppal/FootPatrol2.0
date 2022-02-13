import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PatrolDuringWalk from './pages/PatrolDuringWalk.js';
import FooterMap from './components/FooterMap.js';
import JaneDoeImage from './assets/JaneDoe.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PatrolDuringWalk firstName="Victoria" lastName="Da Rosa" minutesFromDestination="12" patrolleeImage={JaneDoeImage} />
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
