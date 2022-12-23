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
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import React from "react";
import axios from "axios";
import Logs from "../api/logs";




//this screen will be used to enter a log for a car
//there will be 5 text inputs
// date, spedometer, distance, literspurchased, garage, totalcost
//there will be a button to submit the log

export default function Log({route}) {
    const [date, setDate] = React.useState("");
    const [spedometer, setSpedometer] = React.useState("");
    const [distance, setDistance] = React.useState("");
    const [literspurchased, setLiterspurchased] = React.useState("");
    const [garage, setGarage] = React.useState("");
    const [totalcost, setTotalcost] = React.useState("");
    const [user_id, setUser_id] = React.useState(route.params.id);
    const [carRegistration, setCarRegistration] = React.useState(route.params.registration);

    const addLog = async () => {
        if (date != "" && spedometer != "" && distance != "" && literspurchased != "" && garage != "" && totalcost != "" && user_id != "" && carRegistration != "") {
            const logs = new Logs();
            const response = await logs.addLog(date, spedometer, distance, literspurchased, garage, totalcost, user_id, carRegistration);
            if (response) {
                Alert.alert("Log Added");
                //clear all inputs text values
                setDate("");
                setSpedometer("");
                setDistance("");
                setLiterspurchased("");
                setGarage("");
                setTotalcost("");
                setUser_id("");
                setCarRegistration("");
                console.log(response);
            } else {
                Alert.alert("Log Not Added");
                console.log(response);
            }
        } else {
            Alert.alert("Please fill in all fields");
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding" enabled>
                <ScrollView>
                <View style={styles.comps}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setDate}
                        value={date}
                        placeholder={'Date'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setSpedometer}
                        value={spedometer}
                        placeholder={'Spedometer'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setDistance}
                        value={distance}
                        placeholder={'Distance'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setLiterspurchased}
                        value={literspurchased}
                        placeholder={'Liters Purchased'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setGarage}
                        value={garage}
                        placeholder={'Garage'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setTotalcost}
                        value={totalcost}
                        placeholder={'TotalCost'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setCarRegistration}
                        value={carRegistration}
                        placeholder={'carRegistration'}
                    />
                    <Button
                        title="Add Log"
                        onPress={addLog}
                    />
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    comps: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    UserImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        width: 300,
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        textAlign: "center",
        margin: 10,
        
    },
});

