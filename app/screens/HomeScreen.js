import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Button,
  FlatList,
  Alert,
} from "react-native";
import Cars from "../api/cars";



export default function Home({ route, navigation }) {



  const [data, setData] = React.useState([]);
  const [Make, setMake] = React.useState("");
  const [Model, setModel] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Registration, setRegistration] = React.useState("");

  const addcar = async () => {
    if (Make != "" && Model != "" && Year != "" && Registration != "") {
      const cars = new Cars();
      const response = await cars.addCar(route.params.id, Make, Model, Year, Registration);
      if (response == "Car Added") {
        Alert.alert("Car Added");
        //clear all inputs text values
        setMake("");
        setModel("");
        setYear("");
        setRegistration("");
        console.log(response);
      } else {
        Alert.alert("Car Not Added");
        console.log(response);
      }
    } else {
      Alert.alert("Please fill in all fields");
    }
  };

  const cars = async () => {
    if (route.params.id != "" && route.params.email != "") {
      console.log("Email: " + route.params.email + " id: " + route.params.id);
      const cars = new Cars();
      const response = await cars.getCars(route.params.id);
      if (response != "") {
        console.log(response);
        setData(response);
      } else {
        Alert.alert("No Cars");
      }
    }
  };


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.WelcomeText}>{route.params.email}</Text>
      </SafeAreaView>
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.comps}>
          <TextInput style={styles.TextInput} placeholder="Make" value={Make} onChangeText={(Make) => setMake(Make)}/>
          <TextInput style={styles.TextInput} placeholder="Model" value={Model}onChangeText={(Model) => setModel(Model)}/>
          <TextInput style={styles.TextInput} placeholder="Year" value={Year} onChangeText={(Year) => setYear(Year)} keyboardType="num-pad"/>
          <TextInput style={styles.TextInput} placeholder="Registration" value={Registration} onChangeText={(Registration) => setRegistration(Registration)}/>
          <Button title="Add Car" style={styles.Button} onPress={() => addcar()}/>
          <Button title="Get Cars" style={styles.Button} onPress={() => cars()}/>
          <FlatList
            data={data}
            keyExtractor={({ registration }, index) => registration}
            renderItem={({ item }) => (

              //Button with car make and model
              //navigate to Logscreen and send with registration and userid
              <Button title={item.make + " " + item.model} onPress={() => navigation.navigate("Log", {registration: item.registration, id: route.params.id})}/>


         

            )}

            
          style={{padding:10}}/>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  WelcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
  },
  comps: {
    justifyContent: "center",
    marginTop: 20,
  },
  TextInput: {
    width: 300,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    margin: 10,

  },
  Button: {
    marginTop: 20,
    padding: 10,
    margin: 10,

  }
});
