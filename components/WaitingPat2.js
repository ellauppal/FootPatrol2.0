//Waiting for patrol arrival

import { StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  const scale_w1= SCREEN_WIDTH/1.23
  const scale_h1=SCREEN_HEIGHT/3
  const scale_t1=SCREEN_HEIGHT/2

export default function WaitingPa() {
  return (
    <View style={styles.bigCont}>
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.c1}>
                <Text style={styles.text}>Patroller</Text>
                        <View style={{width:70, height: 70, 
                        backgroundColor: 'gray', borderRadius: 35,}} />
                        <Text style={styles.text}>Fname Lname</Text>
                </View>
                <View style={styles.c2}>
                <Text style={styles.text}>Your foot patrol is</Text>
                        <Text style={styles.text1}>12</Text>
                        <Text style={styles.text}>minutes away</Text>
                </View>
            </View>
            <View style={styles.button}>
                <Button  
                    title='Cancel Request' 
                    color='#fff'
                    style={styles.text} 
                    />
            </View>
        </View>
        
      </View>
  );
}



const styles = StyleSheet.create({

  container: {
    left: (SCREEN_WIDTH-scale_w1)/2,
    
    alignItems: 'center',
    justifyContent: 'center',
    top:scale_t1 + (SCREEN_HEIGHT/3 - SCREEN_HEIGHT/3.2),
    height: scale_h1,
    width: scale_w1,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth:1,
    borderRadius: 25
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
    color: '#7C63E3',
    fontSize: 57,
    fontWeight: 'bold'
  },
  button: {
    height: 40,
    width: 175,
    borderRadius: 25,
    marginTop: 40,
    backgroundColor: '#E9534A'
  }
});
