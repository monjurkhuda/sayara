import { StyleSheet, Text, View } from "react-native";

export default function ViolationsScreen() {
  return (
    <View>
      <View style={styles.parking_violation_tag}>
        <Text>JVG3455</Text>
        <Text>$65</Text>
        <Text>07/16/2021 (08:22AM)</Text>
        <Text>NO PARKING-STREET CLEANING</Text>
      </View>
      <View style={styles.toll_violation_tag}>
        <Text>JVG3455</Text>
        <Text>$23</Text>
        <Text>07/12/2021 (09:30PM)</Text>
        <Text>EZ-Pass Toll Violation</Text>
      </View>
      <View style={styles.parking_violation_tag}>
        <Text>ABC1123</Text>
        <Text>$50</Text>
        <Text>07/08/2021 (12:02AM)</Text>
        <Text>PHTO SCHOOL ZN SPEED VIOLATION</Text>
      </View>
      <View style={styles.parking_violation_tag}>
        <Text>ABC1123</Text>
        <Text>$65</Text>
        <Text>07/16/2021 (01:12PM)</Text>
        <Text>REG. STICKER-EXPIRED/MISSING</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  parking_violation_tag: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "yellow",
    margin: 8,
    padding: 8,
    gap: 10,
    borderRadius: 10,
    letterSpacing: 2,
    borderBottomColor: "gold",
    borderBottomWidth: 4,
    fontWeight: "900",
  },
  toll_violation_tag: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#d597ed",
    margin: 8,
    padding: 8,
    gap: 10,
    borderRadius: 10,
    letterSpacing: 2,
    borderBottomColor: "#553C5E",
    borderBottomWidth: 4,
  },
});
