import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Register} from './assest/Register.jsx';
import { Login } from './assest/Login.jsx';
import { Home } from './components/home/Home.jsx';


function App() {
    return (
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/home'element={<Home/>}/>
   
    </Routes>
    </BrowserRouter>
  
    )
  }

  
  export default App;
  
     


