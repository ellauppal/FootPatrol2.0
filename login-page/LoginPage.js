//Login Page

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Welcome from '../components/Welcome.js';
import Arrow from '../components/Arrow.js';
import SButLogIn from '../components/SButLogIn.js'
import BtmIcons from '../components/BtmIcons.js';
import { Dimensions } from 'react-native';


export default function LoginPage() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Arrow/>
        
        <Welcome/>
        <View style={styles.container1}>
          <TextInput style={styles.input} placeholder='Email'/>
          <View style={styles.style} />
        </View>
        <View style={styles.container2}>
          <TextInput style={styles.input} placeholder='Password'/>
          <View style={styles.style} />
        </View>
        <SButLogIn />
        <BtmIcons />
      </View>
  );
}

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: 100
    
  },
  container1: {
    flex: 1,
    left: SCREEN_WIDTH/9.9,
    marginTop: 40,
    marginBottom: -60,
  
  },
  container2: {
    
    flex: 1,
    left: SCREEN_WIDTH/9.9,
    marginBottom: SCREEN_HEIGHT/5,
    //marginTop:20
    
  },
  input: {
    fontSize: 20,
    width: 300,
    marginBottom: 5,
  },
  style: {
        alignItems:'flex-start',
        justifyContent:'center',
        borderBottomColor: '#7C63E3',
        borderBottomWidth: 2,
        width: 300,
  },
});
