//Wait for patrol to accept request

import { StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  const scale_w1= SCREEN_WIDTH/1.23
  const scale_h1=SCREEN_HEIGHT/8
  const scale_t1=SCREEN_HEIGHT/4.5 + (60)

export default function WaitingPat1() {
  return (

      <View style={styles.container}>
        <View style={{
            alignItems: 'center', justifyContent:'center', top: scale_t1,
            width: scale_w1, height: scale_h1, backgroundColor: "white",
            //GET RID OF BORDER INFO BELOW ONCE ADDED WITH BACKGROUND COLOR
            borderRadius: 25, borderColor: 'black', borderWidth: 1,
            
        }} >
            <Text style={styles.text}>Waiting for patrol to accept request...</Text>
            
            <View style={styles.container1}>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    top: '40%',

  },
  container1: {
    height: 40,
    width: 175,
    borderRadius: 25,
    backgroundColor: '#E9534A'
  },
  text: {
    color: '#3C3C3C',
    fontSize: 18,
    margin: 10
  },
  text1: {
    color: '#7C63E3',
    fontSize: 48,
    fontWeight: 'bold'
    
  }
});
