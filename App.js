import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import AddScreen from "./screens/AddScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Setting1Screen from "./screens/Setting1Screen";
import Setting2Screen from "./screens/Setting2Screen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const AddStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="add"
        component={AddScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="setting1" component={Setting1Screen} />
      <Stack.Screen name="setting2" component={Setting2Screen} />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStack} />
      <Tab.Screen name="add" component={AddStack} />
      <Tab.Screen name="profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const NavigationTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="main" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
