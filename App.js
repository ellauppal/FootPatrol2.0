import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './pages/TaskList.js';
import FooterMap from './components/FooterMap.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TaskList />
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
