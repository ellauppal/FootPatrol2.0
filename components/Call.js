//During Walk


import { StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  const scale_w1= SCREEN_WIDTH/1.23
  const scale_h1=SCREEN_HEIGHT/6
  const scale_t1=SCREEN_HEIGHT/4.5 + (45)  

export default function Call() {
  return (
      

      <View style={styles.container}>
        <View style={{
            alignItems: 'center', justifyContent:'center', top: scale_t1,
            width: scale_w1, height: scale_h1, backgroundColor: "white",
            //GET RID OF BORDER INFO BELOW ONCE ADDED WITH BACKGROUND COLOR
            borderRadius: 25, borderColor: 'black', borderWidth: 1,
            
        }} >
            <View style={styles.container1}>
                <View style={styles.c1}>
                    <View style={{width:70, height: 70, 
                    backgroundColor: 'gray', borderRadius: 35,}} />
                    <Text style={styles.text}>Fname Lname</Text>
                </View>
                <View style={styles.c2}>
                    <Entypo name="phone" size={67} color="#E9534A" />
                    <Text style={styles.text1}>Call Campus Police</Text>
                </View>
             </View> 
        </View>
        
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
  container1: {
    flexDirection:'row',
  },
  c1: {
    alignItems: 'center', justifyContent:'center'
    
  },
  c2: {
    alignItems: 'center', justifyContent:'center'
  },
  text: {
    color: '#3C3C3C',
    fontSize: 18,
    margin: 10
  },
  text1: {
    color: '#E9534A',
    fontSize: 18,
    margin: 10
  },
});
