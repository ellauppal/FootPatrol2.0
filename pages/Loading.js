import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Logo from '../assets/Logo.png';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Animatable.Image source={Logo} style={styles.image} animation="fadeIn" direction="alternate" iterationCount="infinite" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7C63E3',
    width: '100%',
    height: '100%',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    width: null,
    height: null,
  },
  touchToFadeOut: {
    backgroundColor: '#7C63E3',
    width: '100%',
    height: '100%',
  }
});
