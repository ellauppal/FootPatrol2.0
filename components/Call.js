//During Walk

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import JohnDoe from './JohnDoe.png';
import { Foundation } from '@expo/vector-icons';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scale_w1 = SCREEN_WIDTH / 1.23;
const scale_h1 = SCREEN_HEIGHT / 6;
const scale_t1 = SCREEN_HEIGHT / 7.7;

export default function Call() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          top: -250,
          width: SCREEN_WIDTH / 1.23,
          height: SCREEN_HEIGHT / 7,
          backgroundColor: 'white',
          //GET RID OF BORDER INFO BELOW ONCE ADDED WITH BACKGROUND COLOR
          borderRadius: 25,
          borderColor: '#508FED',
          borderWidth: 1,
          shadowRadius: 8,
          shadowOpacity: 0.25,
        }}
      >
        <View style={styles.t1}>
          <Entypo name='location-pin' size={40} color='#878181' />
          <Text style={{ color: '#3C3C3C', fontSize: 15 }}>
            To: 106 Seagram Dr, Waterloo ON
          </Text>
        </View>
        <View style={styles.t2}>
          <Foundation name='target-two' size={35} color='#878181' />
          <Text style={{ color: '#3C3C3C', fontSize: 15, marginLeft: 5 }}>
            From: Waterloo Public Square Station
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          top: scale_t1,
          width: scale_w1,
          height: scale_h1,
          backgroundColor: 'white',
          borderRadius: 25,
          borderWidth: 1,
          borderColor: 'white',
          shadowRadius: 8,
          shadowOpacity: 0.25,
        }}
      >
        <View style={styles.container1}>
          <View style={styles.c1}>
            <Image
              source={JohnDoe}
              style={{ width: 70, height: 70, borderRadius: 35 }}
            />
            <Text style={styles.text}>John Doe</Text>
          </View>
          <View style={styles.c2}>
            <Entypo name='phone' size={67} color='#E9534A' />
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
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:100,
    top:'50%'
  },
  container1: {
    flexDirection: 'row',
  },
  c1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  c2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3C3C3C',
    fontSize: 18,
    margin: 10,
  },
  text1: {
    color: '#E9534A',
    fontSize: 18,
    margin: 10,
  },
  t1: {
    left: -15,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  t2: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
});
