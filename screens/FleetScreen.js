import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function FleetScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.fleet_div}>
        <Image
          style={styles.car_image}
          source={{
            uri: "https://autotrends.org/images/toyota-camry-hybrid-1501.jpg",
          }}
          resizeMode="contain"
        ></Image>
        <View style={styles.fleet_div_text}>
          <Text>JVG3455</Text>
          <Text>Toyota Camry 2015</Text>
          <Text>Reg. Expires: Mar 2024</Text>
        </View>
      </View>
      <View style={styles.fleet_div}>
        <Image
          style={styles.car_image}
          source={{
            uri: "https://di-uploads-pod16.dealerinspire.com/atlanticchryslerdodgejeepram/uploads/2023/03/200.png",
          }}
          resizeMode="contain"
        ></Image>
        <View style={styles.fleet_div_text}>
          <Text>ABC1123</Text>
          <Text>Jeep Wrangler 2023</Text>
          <Text>Reg. Expires: Apr 2024</Text>
        </View>
      </View>
      <Pressable style={styles.add_button}>
        <Text style={styles.add_button_text}>+ Add Vehicle</Text>
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
    backgroundColor: "green",
  },
  add_button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
