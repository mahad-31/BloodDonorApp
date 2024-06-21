import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";


function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    function handleSubmit (e){
        e.preventDefault();

        axios.post('http://localhost:3001/logindata', {
          email, password
        })
    //    navigate('/Home')
    
        
        .then(res => {
            console.log(res.data);
            if(res.data == "success"){
                navigate('/')
           
            }
            else{
                   
                alert("Invalid Credentials")
            }
        
        })
        .catch(err => console.log(err));
    }
     // Form validation
   
    return (
        <div className="formbody">
        <div className="Container">
            <h2 className="Text">Login</h2>
            <form onSubmit={handleSubmit}>
                
                <input className= "inputfield"type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="inputfield" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="Submit" type="submit">Login</button>
            </form>
        </div>
        </div>
    );
}

export default Login;
