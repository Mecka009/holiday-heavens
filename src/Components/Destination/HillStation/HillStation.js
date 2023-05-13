import React from 'react'
import Navbar from '../../Navbar/Navbar';
import { images } from '../../../Constant';


function HillStation() {
  return (
      <>
      <Navbar />
      <div className='Box'>
        <div className='left'>
        <img src= {images.Mahabaleshwar}/>
        </div>
        <div className='Right'>
        <p>This is Mahabaleshwar
        </p>
        <button className='btn'>Book Now</button>
        </div>
      </div>
      </>
  )
}

export default HillStation;
