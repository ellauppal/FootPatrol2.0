import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react';
import { Location, Permissions } from 'expo';
import { useEffect } from "react";


export default function App() {
    /*
        state = {
            Location: {},
            errorMessage: '',
        };
        
        useEffect(() => {
            this._getLocation();
        }, []);

        _getLocation = async () => {
            const { status } = await Permissions.askAsync(Permissions.Location);
        
            if (status !== 'granted'){
                console.log('permission not granted!');
        
                this.setState({
                    errorMessage: 'permission not granted'
                })
            }
            const Location =  await Location.getCurrentPositionAsync();

            this.setState({
                Location
            })
        }
    */
    return (
        
        <View style={styles.container}>
        <Text>Map Page</Text>
        <MapView
            showsUserLocation={true}
            provider={PROVIDER_GOOGLE}
            style={{ height: '50%', width: '100%' }}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        />
        <StatusBar style='auto' />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
