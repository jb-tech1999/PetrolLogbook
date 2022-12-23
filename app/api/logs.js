import React, {useState, useEffect} from "react";
import axios from "axios";

//192.168.0.120:8000
//create a class the cars api

export default class Logs {
    constructor() {
        this.logs = [];

    }

    async getLogs(user_id) {
        const response = await axios.get("http://192.168.0.120:8000/logs/" + user_id);
        this.logs = response.data;
        return this.logs;

    }

    async addLog(Date, Spedometer, Distance, litersPurchased, Garage, totalcost, user_id, registration) {
        const response = await axios.post("http://192.168.0.120:8000/addlog", {
            date: Date,
            odometer: Spedometer,
            distance: Distance,
            litersPurchase: litersPurchased,
            garage: Garage,
            totalcost: totalcost,
            user_id: user_id,
            carRegistration: registration,
        });
        return response.data;

    }

    async deleteLog(odometer) {
        const response = await axios.delete("http://192.168.0.120:8000/deletelog/" + odometer);
        return response.data;
    }
}

