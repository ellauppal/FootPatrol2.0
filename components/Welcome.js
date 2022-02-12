//Welcome text on login page


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

  
export default class Welcome extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>Welcome back,</Text>
                <Text style={styles.text2}>sign in to continue</Text>
            </View>
        );
    }

}

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale_w1= SCREEN_WIDTH/9.9
const scale_h1=SCREEN_HEIGHT/15

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        alignItems:'flex-start',
        justifyContent:'center',
        left: scale_w1,
        bottom: scale_h1,
        fontStyle: 'normal',
        
    },
    text1: {
        fontSize: 29,
    },
    text2: {
        fontSize: 25,
        color: '#878181'
    }
});