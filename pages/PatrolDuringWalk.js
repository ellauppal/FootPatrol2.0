import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { MaterialIcons } from '@expo/vector-icons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB0QhWbi7LfDb8ays7cmdJ5XT3dwTU8jFw';

export default function PatrolToStart(props) {
  const [dropoff, setDropoff] = useState('');
  const [pickup, setPickup] = useState('');

  return (
    <View style={styles.patrolToStart}>
      <View style={styles.circle}>
        <TouchableWithoutFeedback onPress={() => console.log()}>
          <MaterialIcons name="call" size={38} color="#E9534A" style={styles.icon} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.card}>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.text}>Patrollee</Text>
          <Image source={props.patrolleeImage} style={styles.image} />
          <Text style={styles.text}>{props.firstName} {props.lastName}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.text}>Destination is</Text>
          <Text style={styles.number}>{props.minutesFromDestination}</Text>
          <Text style={styles.text}>minutes away</Text>
        </View>
      </View>
      <MapView
          showsMyLocationButton={true}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          style={{ height: '100%', width: '100%'}}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapViewDirections
            origin={pickup}
            destination={dropoff}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor='#7C63E3'
          />
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  patrolToStart: {
    height: Dimensions.get('window').height - 100,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    position: 'absolute',
    top: 40,
    left: Dimensions.get('window').width - 94,
    zIndex: 1,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  icon: {
    position: 'relative',
    top: 13,
    left: 13,
  },
  card: {
    width: 348,
    height: 135,
    position: 'absolute',
    bottom: 20,
    zIndex: 1,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOpacity: 0.1,
    alignSelf: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    color: "#3C3C3C",
    fontSize: 16,
    textAlign: 'center'
  },
  number: {
    color: '#7C63E3',
    fontWeight: '500',
    fontSize: 48,
    textAlign: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center'
  }
});

const mapStyle = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e9e9e9',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dedede',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#333333',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f2f2f2',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
];
