import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function EzpassesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.fleet_div}>
        <View style={styles.fleet_div_text}>
          <Text>00815928639</Text>
          <Text>Vehicle: Toyota Camry 2015 (JVG3455)</Text>
        </View>
      </View>
      <View style={styles.fleet_div}>
        <View style={styles.fleet_div_text}>
          <Text>00636838542</Text>
          <Text>Vehicle: Toyota Camry 2015 (JVG3455)</Text>
        </View>
      </View>
      <Pressable style={styles.add_button}>
        <Text style={styles.add_button_text}>+ Add EZ-Pass</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  car_image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  fleet_div: {
    display: "flex",
    flexDirection: "row",
    width: "94%",
    backgroundColor: "white",
    margin: 8,
    padding: 8,
    gap: 10,
    borderRadius: 10,
    letterSpacing: 2,
    borderBottomColor: "gray",
    borderBottomWidth: 4,
    borderWidth: 1,
    borderColor: "lightgray",
    fontWeight: "900",
  },
  fleet_div_text: {
    display: "flex",
  },
  add_button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 200,
    backgroundColor: "magenta",
  },
  add_button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
