import React from 'react';
import './App.css';
import HomePage from './routes/HomePage.jsx';
import AboutPage from './routes/AboutPage';
import {Routes, Route} from 'react-router-dom'
import NavFooter from './NavFooter'
import Login from './Login'
import Signup from './SignUp'
import ConnectPage from './routes/ConnectPage'
function App() {
  
  return (
  <Routes>
  <Route path='/' element={<NavFooter />}>
  <Route index element={<HomePage />}/>
  <Route path='about' element= {<AboutPage />}/>
  <Route path='connect' element= {<ConnectPage />}/>
  <Route path='login' element= {<Login />}/>
  <Route path='signup' element= {<Signup />}/>
  </Route>
  </Routes>
  
  
  );
}

export default App;


