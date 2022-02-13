import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PatrolToStart from './pages/PatrolToStart.js';
import FooterMap from './components/FooterMap.js';
import JaneDoeImage from './assets/JaneDoe.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PatrolToStart firstName="Jane" lastName="Doe" minutesAway="10" patrolleeImage={JaneDoeImage} />
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
