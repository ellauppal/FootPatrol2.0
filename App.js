import * as React from 'react';
import { Text, View, StyleSheet, Image, Divider, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Select Your University
      </Text>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
        source={require('./images/UOttawa.png')}
        style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
        source={require('./images/UToronto.png')}
        style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
        source={require('./images/Waterloo.png')}
        style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
        source={require('./images/Western.png')}
        style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
        source={require('./images/Queens.png')}
        style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
        <Image
        source={require('./images/YorkU.png')}
        style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3C3C3C'
  },
  ImageIconStyle: {
    flex: 1,
    width: '100%',
    height: 75,
    resizeMode: 'contain'
  }
});
