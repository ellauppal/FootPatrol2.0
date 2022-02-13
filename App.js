import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Loading from './pages/Loading.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Loading />
    </View>
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
