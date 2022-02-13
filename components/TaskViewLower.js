//DEtailed Task View

import { StyleSheet, Text, View, Image} from 'react-native';
import { Dimensions } from 'react-native';
import JaneDoe from './JaneDoe.png';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');

export default function TaskViewLower() {
  return (
    <View style={styles.bottom}>
      <View>
        <View style={styles.cont1}>
        <Text>You are walking</Text>
          <Image source={JaneDoe} style={{width: 70, height:70, borderRadius:35}} />
          <Text>Jane Doe</Text>
        </View>
      </View>
    
    </View>  
  );
}

const styles = StyleSheet.create({
  bottom:{
    alignItems:'center',
    top: '12%',
    zIndex:9,
  },
  cont1: {
    alignItems: 'center', 
    justifyContent:'center',
    top: SCREEN_HEIGHT/4.5
  },

});
