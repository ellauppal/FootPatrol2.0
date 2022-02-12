import { StyleSheet, Text, View } from "react-native";

export default function ToggleList() {
  return (
    <View style={styles.togglebackground}>
      <View style={styles.toggle}>
        <Text style={styles.inactive} onPress={() => console.log()}>Map</Text>
        <View style={styles.activebackground}>
          <Text style={styles.active}>List</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  togglebackground: {
    backgroundColor: '#7C63E3',
    width: 260,
    height: 48,
    justifyContent: "center",
    borderRadius: 33,
    marginTop: 40,
    alignSelf: 'center',
    shadowRadius: 8,
    shadowOpacity: 0.25,
    marginBottom: 20,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  inactive: {
    color: 'white',
    fontSize: 18,
    width: 122,
    textAlign: 'center',
    paddingTop: 5,
  },
  activebackground: {
    backgroundColor: 'white',
    borderRadius: 33,
    height: 33,
    justifyContent: 'center',
  },
  active: {
    color: '#3C3C3C',
    fontSize: 18,
    width: 122,
    textAlign: 'center',
  },
})
