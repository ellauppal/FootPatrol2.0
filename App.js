import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Profile from './pages/Profile.js';
import FooterProfile from './components/FooterProfile';
import JaneDoeImage from './assets/JaneDoe.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Profile firstName="Jane" lastName="Doe" image={JaneDoeImage} />
      <FooterProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
