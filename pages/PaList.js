import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import FooterMap from '../components/Footer';
import TaskList from '../components/TaskList';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TaskList></TaskList>
        <FooterMap></FooterMap>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }
});