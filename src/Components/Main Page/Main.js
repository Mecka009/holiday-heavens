import React from 'react';
import "./Main.css";
import { images }  from '../../Constant';

function Main(){
    return(
      <>
      <div className="Main">
        <img src={images.Home} alt="bg"/>
      </div>

      <div className='Sub-heading'>
        <h1>Enjoy the Best Destinations with Our Travel Agency</h1>
        <p className='lineUp'>Explore The World</p>
        <a href="http://localhost:3000/trips">Trips Plans</a>
      </div>
      </>
    )
  }
  
export default Main;