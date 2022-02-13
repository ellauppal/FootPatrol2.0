import { StyleSheet, Text, View, Button } from 'react-native';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const x_w1 = SCREEN_WIDTH / 1.15;
const x_h1 = SCREEN_HEIGHT / 17;
const t_w1 = SCREEN_WIDTH / 18.75;
const t_h1 = SCREEN_HEIGHT / 7;
const t_h2 = SCREEN_HEIGHT / 9;

export default function TaskViewUpper(props) {
  return (
    <View style={styles.everything}>
    <View style={styles.top}>
      <Feather name='x' size={24} color='black' style={styles.x} />
      <View>
        <Text style={styles.t3}>From</Text>
        <Text style={styles.t4}>{props.startingPoint}</Text>
      </View>
      <View>
        <Text style={styles.t1}>To</Text>
        <Text style={styles.t2}>{props.destination}</Text>
      </View>
      </View>
      <View style={styles.button}>
        <Button title='Accept' color='#fff' />
      </View>
      </View>

  );
}

const styles = StyleSheet.create({
  everything:{
    alignItems: 'center',
    zIndex: 9,
    bottom: '20%',
  
  },
  button: {
    height: 40,
    width: 175,
    borderRadius: 25,
    marginTop: 40,
    backgroundColor: '#19BE72',
    justifyContent: 'center',
    top:'70%'
  },
  top: {
    alignItems: 'center',
    zIndex: 9,
    bottom: '11%',
    right: '7%',
  },
  t1: {
    fontSize: 12,
    top: t_h1,
    left: t_w1,
  },
  t2: {
    fontSize: 21,
    left: t_w1,
    top: t_h1,
  },
  t3: {
    fontSize: 12,
    top: t_h2,
    left: t_w1,
  },
  t4: {
    fontSize: 21,
    left: t_w1,
    top: t_h2,
  },
  x: {
    top: x_h1,
    left: x_w1,
  },
});
