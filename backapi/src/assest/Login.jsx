import React ,{useState,} from "react";
import { useNavigate } from "react-router-dom";
import { userUserServices } from "../services/userService";
import './login.css'
export const Login = () =>{
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate();

        const [errMessage,setErrMessage] =useState(false);
   

        const {loginUser} = userUserServices()
      
        const handleSubmit = async (e) => {
          e.preventDefault();
        
          try{
            let response
      
            const data ={
               //username:username,
               email:email,
               password:password
            };
            console.log(data);
            response = await loginUser(data);
            console.log(response.success);
      
          if(response.success){
                navigate('/home');
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
      
    return(
      <div className="login-container"> {/* Add a class for styling */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? </p>
    </div>
    )
}