import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Trips from './Screens/Trips/Trips';
import About from './Screens/About/About';
import ContactUs from './Screens/ContactUs/ContactUs';
import SignUp from './Screens/SignUp/SignUp';
import Login from './Screens/SignUp/Login';
import Profile from './Screens/Profile/Profile';
import Edit from './Screens/SignUp/Edit';
import Reset from './Screens/SignUp/Reset';
import HillStation from './Components/Destination/HillStation/HillStation';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trips' element={<Trips />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Edit' element={<Edit />} />
        <Route path='/Reset' element={<Reset />} />
        <Route path='/Destination' element={<HillStation />} />
      </Routes>

    </Router>
  );
}
export default App;