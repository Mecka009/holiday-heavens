import Navbar from "../../Components/Navbar/Navbar";
import React from 'react'
import "./About.css";
import { images }  from '../../Constant';
import Footer from "../../Components/Footer/Footer";


function About(){
    return(
      <>
      <Navbar/>
      <div className="About">
        <img src={images.About} alt="bg"/>
      </div>
        <div className="Heading">
        <h1 className='lineUp'>About Us</h1>
        <ul>
        <li>          
        <a className="btn" href="http://localhost:3000/">Home</a></li>
        <li>
        <a className="about" href="/">/About</a>
        </li>
        </ul>
      </div>
      <Footer/>
      </>
    );
  }
  
  export default About;