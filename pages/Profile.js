import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export default function Profile(props) {
  return (
    <View style={styles.profilePage}>
      <View style={styles.topContainer}>
        <Image source={props.image} style={styles.image} />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.name}>{props.firstName}</Text>
          <Text style={styles.name}>{props.lastName}</Text>
        </View>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  profilePage: {
    height: Dimensions.get('window').height - 100,
  },
  topContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 30,
    marginLeft: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    marginLeft: 20,
    color: '#3C3C3C'
  }
});
