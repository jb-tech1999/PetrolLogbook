import React from "react";
import {View} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import getUsers from "./app/api/users";
import getCars from "./app/api/cars";


export default   function App() {
  const users =  getUsers();


  console.log(users);
 


  return (
    <WelcomeScreen/>
  );
}