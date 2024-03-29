import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


const SignUp =()=>{
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const navigate = useNavigate();


   useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth)
      {
        navigate('/')
      }

   },[]);



   const collectData= async ()=>{
    console.log(name, email, password );
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body:JSON.stringify({name, email, password}),
      headers: {
        'Content-Type' : 'application/json'
      },

    });
    result = await result.json()
    console.log(result);
    
    localStorage.setItem("user",JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate('/')


    // if(result)
    // {
    //   navigate('/')
    // }
   }

   return(
          <div className="register">
            <h1 className="wow">Register </h1>

            <input type="text" className='inputBox' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter name ' />
            <input type="text" className="inputBox" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" />
            <input type="password" className="inputBox" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="Enter Password "  />
            <button onClick={collectData} className="appButton">Sign Up</button>
          </div>
   )

}

export default SignUp;