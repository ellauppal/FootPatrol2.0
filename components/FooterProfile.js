import { StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');

  const scale_w1= SCREEN_WIDTH/1.23
  const scale_h1=SCREEN_HEIGHT/6
  const scale_t1=SCREEN_HEIGHT/4.5 + (45)  

export default function FooterProfile() {
  return (
      <View style={styles.cont}>
        <View style={styles.container}>
            <View style={styles.c1}>
              <MaterialIcons name="message" size={40} color="white" />
            </View>
            <View style={styles.c2}>
              <Entypo name="map" size={50} color="white" />
            </View>
            <View style={styles.c3}>
              <Ionicons name="person" size={40} color="white" />
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create ({
    container: {
      justifyContent:'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: SCREEN_WIDTH,
      height: 100,
      backgroundColor: '#7C63E3'
    },
    c1: {
      marginHorizontal: 60
    },
    c2: {
      marginHorizontal: 40
    },
    c3: {
      marginHorizontal: 60
    }
});
