import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import store from "./store";

import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import AddScreen from "./screens/AddScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Setting1Screen from "./screens/Setting1Screen";
import Setting2Screen from "./screens/Setting2Screen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const headerNavigationOptions = {
  headerStyle: {
    backgroundColor: "deepskyblue",
    marginTop: Platform.OS === "android" ? 24 : 0,
  },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          ...headerNavigationOptions,
          headerTitle: "Treco",
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={{
          ...headerNavigationOptions,
          headerTitle: "Detail",
        }}
      />
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
        options={{
          ...headerNavigationOptions,
          headerTitle: "Profile",
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="setting1"
        component={Setting1Screen}
        options={{
          ...headerNavigationOptions,
          headerTitle: "Setting 1",
        }}
      />
      <Stack.Screen
        name="setting2"
        component={Setting2Screen}
        options={{
          ...headerNavigationOptions,
          headerTitle: "Setting 2",
        }}
      />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "deepskyblue",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarLabel: "僕たちのHOME",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={AddStack}
        options={{
          tabBarLabel: "追加すんよ",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "設定",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
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
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <NavigationTab />
        </View>
      </Provider>
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
