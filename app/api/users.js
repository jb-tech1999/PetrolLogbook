import React, {useState, useEffect} from "react";
import axios from "axios";

//192.168.0.120:8000

export  default function getUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.0.120:8000/users')
            .then(res => {
                setUsers(res.data);
            }
        )
    }, []);

    return users;
}




