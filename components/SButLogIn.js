//Sign in button on log in page

import React from 'react';
import { StyleSheet, Text, View , TouchableOpacityComponent} from 'react-native';
import { Dimensions } from 'react-native';
import { Button } from 'react-native';

export default class SButLogIn extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button  
                title='Sign in' 
                color='#7C63E3'
                style={styles.text} 
                />
            </View>
        );
    }

}

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale_w1= SCREEN_WIDTH/12
const scale_h1=SCREEN_HEIGHT/3.2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'flex-start',
        justifyContent:'center',
        fontSize: 20,
        left: scale_w1,
        bottom: scale_h1,
    },
    text: {
        fontSize: 20
    }
});