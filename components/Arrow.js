//Arrow button at the top of Login and SignUp pages

import React from 'react';
import { StyleSheet, Text, View , TouchableOpacityComponent} from 'react-native';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native';

export default class Arrow extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <AntDesign.Button name="arrowleft" size={24} color="black " backgroundColor='white'/>
            </View>
        );
    }

}

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale_w1= SCREEN_WIDTH/15
const scale_h1=SCREEN_HEIGHT/20

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'flex-start',
        justifyContent:'center',
        left: scale_w1,
        bottom: scale_h1,
        fontStyle: 'normal',
        
    },
});