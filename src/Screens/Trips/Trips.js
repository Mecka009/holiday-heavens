import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { images } from '../../Constant';
import React from 'react';
import "./Trips.css";

function Trips() {
  return (
    <>
    <Navbar/>
      <div className="Trip">
        <img src={images.Trip} alt="bg" />
      </div>
      <div className="Heading">
        <h1 className='lineUp'>Places to Travel</h1>
        <ul>
          <li>
            <a className="button" href="http://localhost:3000/">Home</a></li>
          <li>
            <a className="trips" href="/">/Trip</a>
          </li>
        </ul>
      </div>


<div class="title"><h1>Let us plan you a
                perfect Holiday</h1><br></br><h6>Personalised, well-crafted tour packages for best experiences</h6></div>

      <div className='display1'>
        

        <ul><li>
          <div className="display">
            <img src={images.Kailash} alt="image" />
            <p class="tm-date"></p></div>
        </li>
        
            
          <li>
            <div>
              <img src={images.Dwarka} alt="image" />
              <h3>Pilgrimage</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>
          <li>
            <div>
              <img src={images.bungeejumping} alt="image" />
              <h3>Adventure</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>
          <li>
            <div>
              <img src={images.Mahabaleshwar} alt="image" />
              <h3>HillStation</h3>
              <p class="tm-date">50+ packages</p>
            </div>
          </li>

        </ul>
      </div>
      <div class="title"><h3>India Holiday Destinations</h3></div>
  <div className="Holiday">
      <ul><li>
          <div>
            <img src={images.Kashmir} alt="image" />
            <h3>Kashmir</h3>
            <p class="tm-date">50+ packages</p></div>
        </li>

        
            
          <li>
            <div>
              <img src={images.Rajasthan} alt="image" />
              <h3>Rajasthan</h3>
              <p class="tm-date">30+ packages</p>
            </div>
          </li>
          <li>
            <div>
              <img src={images.Gujarat} alt="image" />
              <h3>Gujarat</h3>
              <p class="tm-date">50+ packages</p>
            </div>
          </li>
          <li>
            <div>
              <img src={images.Sikkim} alt="image" />
              <h3>Sikkim</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>

        </ul>
 </div>

 <div class="title"><h3>International Holiday Destinations</h3></div>
      <div className="International">
      <ul><li>
          <div>
            <img src={images.Dubai} alt="image" />
            <h3>Paris, Italy</h3>
            <p class="tm-date">70+ packages</p></div>
        </li>
        
            
          <li>
            <div>
              <img src={images.Maldives} alt="image" />
              <h3>Maldives</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>
          <li>
            <div>
              <img src={images.Japan} alt="image" />
              <h3>Japan</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>
          <li>
            <div>
              <img src={images.Singapore} alt="image" />
              <h3>Singapore</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>

        </ul>
</div>

<div class="title"><h3>Trekking Activities</h3></div>
      <div className="Trekking">
      <ul><li>
          <div>
            <img src={images.mountainbiking} alt="image" />
            <h3>Mountainbiking</h3>
            <p class="tm-date">70+ packages</p></div>
        </li>
        
            
          <li>
            <div>
              <img src={images.bungeejumping} alt="image" />
              <h3>Bungeejumping</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>
          <li>
            <div>
              <img src={images.Rafting} alt="image" />
              <h3>Rafting</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>
          <li>
            <div>
              <img src={images.Trekking} alt="image" />
              <h3>Trekking</h3>
              <p class="tm-date">70+ packages</p>
            </div>
          </li>

        </ul>
</div>

      <div class="title"><h2>Themes You Can Explore</h2></div>
      <div class="Themes">
      <ul>	
					<li>
						<div class="align-self-stretch box p-4 text-center"></div>
						<div class="icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-mountain-sun"></i></div>
					</li>
				</ul>
				<ul>	
					<li>
						<div class="align-self-stretch box p-4 text-center"></div>
						<div class="icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-gopuram"></i></div>
					</li>
				</ul>
				<ul>
					<li>
						<div class="align-self-stretch box p-4 text-center"></div>
						<div class="icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-hands-praying"></i></div>
					</li>
				</ul>
				<ul>
					<li>
						<div class="align-self-stretch box p-4 text-center"></div>
						<div class="icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-umbrella-beach"></i></div>
					</li>

				</ul>
			</div>
      <div class= "Names">
			   <ul>
			        <li>
						<h5 className="themes">HILL STATION</h5>
					</li>
                </ul>

				<ul>
			        <li>
						<h5 className="themes">PILGRIMAGE</h5>
							
					</li>
                </ul>

				<ul>
			        <li>
						<h5 className="themes">HERITAGE</h5>
							
					</li>
                </ul>

				<ul>
			        <li>
						<h5 className="themes">BEACH</h5>
							
					</li>
                </ul>
				</div>
        <Footer/>
        </>
  );
}

export default Trips;