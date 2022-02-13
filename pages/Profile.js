import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Profile(props) {
  return (
    <View style={styles.profilePage}>
      <TouchableWithoutFeedback onPress={() => console.log()}>
        <Feather name="settings" size={32} color="#7C63E3" style={styles.settingsButton} />
      </TouchableWithoutFeedback>
      <Image source={props.image} style={styles.image} />
      <Text style={styles.name}>{props.firstName}</Text>
      <Text style={styles.name}>{props.lastName}</Text>
      <Text style={styles.institution}>{props.institution}</Text>
    </View>
  );
}

styles = StyleSheet.create({
  profilePage: {
    height: Dimensions.get('window').height - 100,
    justifyContent: 'center',
  },
  settingsButton: {
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    color: '#3C3C3C',
    textAlign: 'center',
  },
  institution: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#7C63E3'
  },
});
