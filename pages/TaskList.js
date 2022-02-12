import { StyleSheet, Text, View } from "react-native";
import ToggleList from "../components/ToggleList";

export default function TaskList() {
  return (
    <View style={styles.tasklist}>
      <ToggleList />
    </View>
  );
}

const styles = StyleSheet.create({
  tasklist: {

  },
})
