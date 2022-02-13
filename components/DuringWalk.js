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
const scale_h1 = SCREEN_HEIGHT / 4;
const scale_t1 = SCREEN_HEIGHT / 5.5;

export default function DuringWalk() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          top: scale_t1,
          width: scale_w1,
          height: scale_h1,
          backgroundColor: 'white',
          borderRadius: 25,
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
            <Text style={styles.text1}>Your foot patrol is</Text>
            <Text style={styles.text2}>ON THEIR WAY!</Text>
          </View>
        </View>
        <View style={styles.but}>
          <Button title='Click When Patrol Has Arrived' color='#fff' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '48%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
  container1: {
    flexDirection: 'row',
  },
  c1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  c2: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 25,
  },
  text: {
    color: '#3C3C3C',
    fontSize: 15,
    margin: 10,
  },
  text1: {
    color: '#3C3C3C',
    fontSize: 18,
    margin: 10,
  },
  text2: {
    color: '#7C63E3',
    fontSize: 17,
    fontWeight: 'bold',
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
  but: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 70,
    backgroundColor: '#FFBE5C',
    borderRadius: 40,
    margin: 10,
  },
});
