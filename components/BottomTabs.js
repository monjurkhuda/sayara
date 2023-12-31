import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { View } from "react-native-web";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FleetScreen from "../screens/FleetScreen";
import ViolationsScreen from "../screens/ViolationsScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import EzpassesScreen from "../screens/EzpassesScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Violations"
        component={ViolationsScreen}
        options={{
          tabBarLabel: "Violations",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="exclamationcircleo" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Fleet"
        component={FleetScreen}
        options={{
          tabBarLabel: "Fleet",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="car-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="EZ-Passes"
        component={EzpassesScreen}
        options={{
          tabBarLabel: "EZ-Passes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="ticket-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          tabBarLabel: "Payments",
          tabBarIcon: ({ color, size }) => (ticket
            <AntDesign name="pay-circle-o1" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
