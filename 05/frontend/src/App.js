import React, { useEffect, useState } from "react";
import axios from "axios";


function App(){

    const [data,setData] = useState([]);


    useEffect(
        ()=>{
            axios.get("http://localhost:5000/users").then((response)=>{
                setData(response.data);
            });
        }, []
    );

    return (

        <div>
            <h1>User List</h1>
            <ul>
                {data.map((user,index)=>{
                   return <li key={index}>{user.name}</li>;
                })}
            </ul>
        </div>
    );

}


export default App