import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Index'
import Home from './landingpages/Home/index'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Footer } from './landingpages/footer/Style';
import Index from './landingpages/footer/Index';
import login from './landingpages/login/Index'
import Signup from './landingpages/signup/Signup';
import Forget from './landingpages/forget account/Forget';
import Pasword from './landingpages/newpasword/Pasword';
import Otp from './landingpages/otp/Otp';
import Login from './landingpages/login/Index';
import profile from './landingpages/profile/Profile';
import Profile from './landingpages/profile/Profile';
import Contact from './landingpages/contact us/Contact';
import Vehicle from './landingpages/vehicle listing/Vehicle';
import Favourite from './landingpages/favourite/Index';
import History from './landingpages/history/Index';
import Vehicle3 from './landingpages/vehicle listing2/Index'
import BilliDetail from './landingpages/BillDetail/Index';

import { data } from './data';
import { useEffect } from 'react';




function App() {
  
  return (
    <div >
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/Footer' element={<Index/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/forget' element={<Forget/>}/>
    <Route path='/pasword' element={<Pasword/>}/>
    <Route path='/otp' element={<Otp/>}/> 
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/vehicle' element={<Vehicle/>}/>
    <Route path='favourite' element={<Favourite/>}/>
    <Route path='history' element= {<History/>}/>
    <Route path='Vehicle3' element= {<Vehicle3/>}/>
    <Route path='BilliDetail'element= {<BilliDetail/>}/>
  
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
