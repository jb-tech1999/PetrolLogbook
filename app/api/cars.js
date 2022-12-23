import React, {useState, useEffect} from "react";
import axios from "axios";

//192.168.0.120:8000
//create a class the cars api

export default class Cars {
    constructor() {
        this.cars = [];

    }

    async getCars(user_id) {
        const response = await axios.get("http://192.168.0.120:8000/cars/" + user_id);
        this.cars = response.data;
        return this.cars;
    }

    async addCar(user_id, make, model, year, registration) {
        const response = await axios.post("http://192.168.0.120:8000/addcar", {
            user_id: user_id,
            make: make,
            model: model,
            year: year,
            registration: registration,
        });
        return response.data;
    }

    async deleteCar(registration) {
        const response = await axios.delete("http://192.168.0.120:8000/deletecar/" + registration);
        return response.data;
    }

}









  //const cars = async () => {
  //  if (route.params.id != "" && route.params.email != "") {
  //    console.log("Email: " + route.params.email + " id: " + route.params.id);
  //    await fetch("http://192.168.0.120:8000/cars/" + route.params.id, {
  //      method: "GET",
  //      headers: {
  //        Accept: "application/json",
  //        "Content-Type": "application/json",
  //      },
  //    })
  //      .then((res) => res.json())
  //      .then((resData) => {
  //        if (resData != "") {
  //          console.log(resData);
  //          setData(resData);
  //        } else {
  //          Alert.alert("No Cars");
  //        }
  //      });
  //  }
  




