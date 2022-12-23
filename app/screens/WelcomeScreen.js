import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import React from "react";
import axios from "axios";



export default function App({navigation}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signin = async () =>{
      if (email != "" && password != ""){
        //console.log("Email: " + email + " password: " + password);
        await fetch('http://192.168.0.120:8000/login',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          
          },
          body: JSON.stringify({
            'username': email,
            'password': password
          })
        }).then(res => res.json())
        .then(resData => {
          console.log(resData);
          if (resData){
            console.log("Welcome User: " + resData);
            navigation.navigate("Home", {email: email, id: resData.id});
          }else{
            Alert.alert("Login Failed");
          }
        })
      }
    }
    
  
      
    

  return (
    
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" enabled>
      <View style={styles.comps}>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={styles.UserImage}
      />

      <Text style={styles.Welcome}>Login</Text>

      <TextInput 
      style={styles.Inputs} 
      placeholder="Enter username"
      onChangeText={(email) => setEmail(email)}
      clearButtonMode="always"
      />

      <TextInput
        secureTextEntry={true}
        style={styles.Inputs}
        placeholder="Enter password"
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        onPress={() => signin()}
        title="Login"
        style={{
          backgroundColor: "dodgerblue",
          marginTop: 10,
          padding: 10,
        }}
      />
      </View>
      </KeyboardAvoidingView>

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

  },
  Welcome: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  UserImage: {
    width: 150,
    height: 150,
    borderRadius: Platform.OS === "ios" ? 200 : 100,
    borderColor: "#000",
    borderWidth: 3,
  },
  Inputs: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    width: Platform.OS === "ios" ? 300 : 200,
    textAlign: "center",
  },
  comps: {
    marginTop: 40,
    alignItems: "center",


  }
});
