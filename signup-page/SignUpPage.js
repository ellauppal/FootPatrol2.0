//Sign Up Page

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Welcome1 from '../components/Welcome1.js';
import Arrow from '../components/Arrow.js';
import SButSignUp from '../components/SButSignUp.js'
import BtmIcons1 from '../components/BtmIcons1.js';
import { Dimensions } from 'react-native';


export default function SignUpPage() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Arrow/>
        
        <Welcome1/>
        <View style={styles.container1}>
          <TextInput style={styles.input} placeholder='Email'/>
          <View style={styles.style} />
        </View>
        <View style={styles.container2}>
          <TextInput style={styles.input} placeholder='Phone Number'/>
          <View style={styles.style} />
        </View>
        <View style={styles.container3}>
          <TextInput style={styles.input} placeholder='Password'/>
          <View style={styles.style} />
        </View>
        <View style={styles.container4}>
          <TextInput style={styles.input} placeholder='Re-enter Password'/>
          <View style={styles.style} />
        </View>
        <SButSignUp />
        <BtmIcons1 />
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
    bottom:40
  },
  container2: {
    flex: 1,
    left: SCREEN_WIDTH/9.9,
    bottom: 110
  },
  container3: {
    
    flex: 1,
    left: SCREEN_WIDTH/9.9,
    bottom: 180
  },
  container4: {
    
    flex: 1,
    left: SCREEN_WIDTH/9.9,
    marginBottom: -160,
    bottom: 250
    
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
