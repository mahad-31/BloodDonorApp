import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bloodgroup, setbloodgroup] = useState("");
    const [city, setcity] = useState("");
    const[phone, setphone] = useState("");
    const navigate = useNavigate();

    function handleSubmit (e){
        if (name == "" || email == "" || password == "") {
            alert("Please fill in all fields")
            return
        }
        e.preventDefault();

        axios.post('http://localhost:3001/loginuser', {
          name, email, password, bloodgroup, city, phone
        })
       
        
        // navigate('/Login')
        .then(res => {
            console.log(res.data);
            if(res.data == "success"){
                navigate('/')

            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="formbody">
        <div className="Container">
            <h2 className="Text">Register</h2>
            <form onSubmit={handleSubmit}>
                <input className= "inputfield"type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className= "inputfield"type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className= "inputfield"type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className= "inputfield"type="text" placeholder="Blood Group" value={bloodgroup} onChange={(e) => setbloodgroup(e.target.value)} />
                <input className= "inputfield"type="text" placeholder="City" value={city} onChange={(e) => setcity(e.target.value)} />
                <input className= "inputfield"type="text" placeholder="Phone" value={phone} onChange={(e) => setphone(e.target.value)} />
                <p className="Text1">Already have an account? <a href="/Login">Login</a></p>
                <button className="Submit"type="submit">Register</button>
                
                
            </form>
        </div>
        </div>
    );
}

export default Register;
