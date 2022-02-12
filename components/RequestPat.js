//Create request for patroll

import { StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import React, { useState, setState, Component} from 'react';
import { Dimensions } from 'react-native';
import WaitingPat1 from './WaitingPat1';
import { setStatusBarHidden } from 'expo-status-bar';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');

  const scale_w1= SCREEN_WIDTH/1.8
  const scale_h1=SCREEN_HEIGHT/3.2
  const scale_t1=SCREEN_HEIGHT/4.5

  this.setState({showTheThing: true}) // show
  this.setState({showTheThing: false}) // hide
  

  export default class RequestPat extends React.Component {
    constructor(){
      super();
      this.state ={
  
        showTheThing:true
      }
      this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({showTheThing: false})
    }

  render() {
  return (
    
    <View style={styles.display} name='hide'>
    {
      this.state.showTheThing ? 
      <View style={styles.container}>
        {}
        {shouldShow ? (
          <WaitingPat1></WaitingPat1>
        ) : null}
        <View style={{
            alignItems: 'center', justifyContent:'center', top: scale_t1,
            width: scale_w1, height: scale_w1, backgroundColor: "white",
            //GET RID OF BORDER INFO BELOW ONCE ADDED WITH BACKGROUND COLOR
            borderRadius: 25, borderColor: 'black', borderWidth: 1,
            
        }} >
            <Text style={styles.text}>Closest foot Patroller is</Text>
            <Text style={styles.text1}>12</Text>
            <Text style={styles.text}>minutes away</Text>
            
            <View style={styles.container1}>
                <Button             
                    onPress={this.handleClick}
                    title='Request' 
                    color='#fff'
                    style={styles.text} 
                    />
            </View>
        </View>
      </View>
      : null
    }
    </View>
  );
}
}


const styles = StyleSheet.create({
  display:{
    display: 'none'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    top: '45%'

  },
  container1: {
    height: 40,
    width: 100,
    borderRadius: 25,
    color: 'white',
    backgroundColor: '#7C63E3'
  },
  box: {
    width: scale_w1,
    height: scale_h1,
    flex:1,
    backgroundColor: 'black',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
  },
  text: {
    color: '#3C3C3C',
    fontSize: 18,
    margin: 10
  },
  text1: {
    color: '#7C63E3',
    fontSize: 48,
    fontWeight: 'bold'
  },
  
});
