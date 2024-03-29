import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userUserServices } from '../services/userService';
import './reg.css'

 export  function Register() {


  const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errMessage,setErrMessage] =useState(false);
   
   const navigate = useNavigate();
   const location = useLocation();
   
   
     
   const {registerUser} = userUserServices()

   const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      let response

      const data ={
         username:username,
         email:email,
         password:password
      };
      console.log(data);
      response = await registerUser(data);
      console.log(response.success);

    if(response.success){
          navigate('/login');
          setEmail('')
          setPassword('')
        }else{
          setErrMessage(response.data.message);
      }
      
  }catch(err){
    console.log(err);
    setErrMessage(err?.response?.data?.message);
}
  };

  return (
    <div className="register-container"> {/* Add a class for styling */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <input type="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}



    
  
