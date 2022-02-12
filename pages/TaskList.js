import { Dimensions, FlatList, StyleSheet, Text, TextPropTypes, View } from "react-native";
import ToggleList from "../components/ToggleList";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import TaskCard from "../components/TaskCard";

const TaskCard = (props) => {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.start}>
        <MaterialIcons name='my-location' size={18} color='white' style={cardStyles.icon} />
        <Text style={cardStyles.address}>{props.startingPoint}</Text>
      </View>
      <View style={cardStyles.finish}>
        <Ionicons name='location-sharp' size={18} color='white' style={cardStyles.icon} />
        <Text style={cardStyles.address}>{props.destination}</Text>
      </View>
      <View style={cardStyles.time}>
        <View>
          <Text style={cardStyles.number}>{props.minutesFromStart}</Text>
          <Text style={cardStyles.timeLabel}>minutes away</Text>
        </View>
        <View>
          <Text style={cardStyles.number}>{props.journeyLengthMinutes}</Text>
          <Text style={cardStyles.timeLabel}>minute journey</Text>
        </View>
      </View>
    </View>
  );
}

const renderItem = ({ item }) => {
  return (
    <TaskCard
      startingPoint={item.startingPoint}
      destination={item.destination}
      minutesFromStart={item.minutesFromStart}
      journeyLengthMinutes={item.journeyLengthMinutes}
    />
  );
}

const DATA = [
  {
    startingPoint: "106 Seagram Dr, Waterloo ON",
    destination: "Waterloo Public Square Station",
    minutesFromStart: "12",
    journeyLengthMinutes: "17",
  },
  {
    startingPoint: "106 Seagram Dr, Waterloo ON",
    destination: "Waterloo Public Square Station",
    minutesFromStart: "12",
    journeyLengthMinutes: "17",
  },
  {
    startingPoint: "106 Seagram Dr, Waterloo ON",
    destination: "Waterloo Public Square Station",
    minutesFromStart: "12",
    journeyLengthMinutes: "17",
  },
  {
    startingPoint: "106 Seagram Dr, Waterloo ON",
    destination: "Waterloo Public Square Station",
    minutesFromStart: "12",
    journeyLengthMinutes: "17",
  },
  {
    startingPoint: "106 Seagram Dr, Waterloo ON",
    destination: "Waterloo Public Square Station",
    minutesFromStart: "12",
    journeyLengthMinutes: "17",
  },
]

export default function TaskList() {
  return (
    <View style={styles.tasklist}>
      <ToggleList />
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    width: 328,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#7C63E3',
    alignSelf: 'center',
    marginBottom: 20,
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  start: {
    flexDirection: 'row',
    marginLeft: 14,
    marginTop: 16,
  },finish: {
    flexDirection: 'row',
    marginLeft: 14,
    marginTop: 10,
  },
  address: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 4,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  number: {
    fontSize: 36,
    color: 'white',
    alignSelf: 'center',
    marginTop: 4,
    fontWeight: '500',
  },
  timeLabel: {
    color: 'white',
    fontSize: 14,
  }
})

const styles = StyleSheet.create({
  tasklist: {
    height: Dimensions.get('window').height - 100,
  },
})
