import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import DuringWalk from '../components/DuringWalk';
import FooterMap from '../components/Footer';

const GOOGLE_MAPS_APIKEY = 'AIzaSyB0QhWbi7LfDb8ays7cmdJ5XT3dwTU8jFw';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropoff: '' };
    this.state = { pickup: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <DuringWalk></DuringWalk>
        <FooterMap></FooterMap>
        <MapView
          showsMyLocationButton={true}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          style={{ height: '95%', width: '100%', bottom: '11%' }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapViewDirections
            origin={this.state.pickup}
            destination={this.state.dropoff}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor='#7C63E3'
          />
        </MapView>
        <StatusBar style='auto' />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  rectangle: {
    height: 148,
    width: 370,
    borderRadius: 25,
    borderColor: '#7C63E3',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 10,
    top: '7%',
  },
  header: {
    fontWeight: '600',
  },
  subHeader: {
    fontWeight: 'normal',
  },
  input: {
    marginTop: '3%',
    fontSize: 15,
    fontWeight: 'normal',
    color: '#3C3C3C',
    backgroundColor: '#F3F3F3',
    height: 30,
    width: 280,
  },
  head: {
    alignItems: 'center',
    fontSize: 13,
    fontFamily: 'Open Sans',
    color: '#3C3C3C',
    top: '10%',
  },
  below: {
    alignItems: 'center',
    top: '13%',
  },
  inLine: {
    flexDirection: 'row',
  },
  icon: {
    top: '3%',
    marginRight: '3%',
  },
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
