
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import Log from "./app/screens/LogScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";




const App = () => {

  //find route id variable

  

const isLoggedIn = true;
const {Navigator, Screen} = createBottomTabNavigator();


return (
  <NavigationContainer>
    <Navigator initialRouteName="Login">
 
      <Screen
        name="Login"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-log-in" color={color} size={size} />
          ),
        }}
      />

      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Log"
        component={Log}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-add" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  </NavigationContainer>
);
  };

export default App;