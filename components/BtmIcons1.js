//Bottom Icons for the Sign up page

import React from 'react';
import { StyleSheet, Text, View , TouchableOpacityComponent} from 'react-native';
import { Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native';

export default class BtmIcons1 extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Ionicons.Button name="person-add" size={24} color="#7C63E3" backgroundColor='white'/>
                    <Text style={styles.text}>
                        Sign Up
                    </Text>
                </View>
                
                <View style={styles.container2}>
                    <FontAwesome5.Button name="sign-in-alt" size={35} color="#878181" backgroundColor='white'/>
                    <Text style={styles.text1}>
                        Sign In
                    </Text>
                </View>
                
            </View>
        );
    }

}

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale_w1= SCREEN_WIDTH/4
const scale_h1=SCREEN_HEIGHT/5
const scale_w2=SCREEN_HEIGHT/9

const styles = StyleSheet.create({
    container: {
        zIndex:-1,
        
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'center',
        left: scale_w1,
        bottom: scale_h1,
        fontStyle: 'normal',
        
    },
    container1: {
        marginRight: scale_w2
    },
    container2: {
        marginBottom: 0
    },
    text: {
        fontSize: 15,
        color: '#7C63E3'
    },
    text1: {
        fontSize: 15,
        color: '#878181'
    }
});