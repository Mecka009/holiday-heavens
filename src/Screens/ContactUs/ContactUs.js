import Navbar from "../../Components/Navbar/Navbar";
import React from 'react'
import "./ContactUs.css";
import { images } from '../../Constant';
import Footer from "../../Components/Footer/Footer";


function ContactUs() {
	return (
		<>
			<Navbar />
			
			<div className="ContactUs">
				<img src={images.About} alt="bg" />
			</div>
			<div className="Heading">
				<h1 className='lineUp'>Contact Us</h1>
				<ul>
					<li>
						<a className="btn" href="http://localhost:3000/">Home</a></li>
					<li>
						<a className="contact" href="/">/Contact</a>
					</li>
				</ul>
			</div>

			<div class="col-md-3 d-flex">

			<ul>	
					<li>
						<div class="align-self-stretch box p-4 text-center"></div>
						<div class="icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-address-book"></i></div>
					</li>
				</ul>
				<ul>	
					<li>
						<div class="align-self-stretch box p-4 text-center"></div>
						<div class="icon d-flex align-items-center justify-content-center"><i class="fa-sharp fa-solid fa-phone"></i></div>
					</li>
				</ul>
				<ul>
					<li>
						<div class="align-self-stretch box p-4 text-center"></div>
						<div class="icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-envelope"></i></div>
					</li>
				</ul>
				<ul>
					<li>
						<div class="align-self-stretch box p-4 text-center"></div>
						<div class="icon d-flex align-items-center justify-content-center"><i class="fa-solid fa-earth-africa"></i></div>
					</li>

				</ul>
			</div>
			<div class= "contain">
			   <ul>
			        <li>
						<h5 className="address">Address<br></br>198 West 21th Street</h5>
					</li>
                </ul>

				<ul>
			        <li>
						<h5 className="address">Contact Number<br></br>+ 1235 2355 98</h5>
							
					</li>
                </ul>

				<ul>
			        <li>
						<h5 className="address">Email Address<br></br>info@yoursite.com</h5>
							
					</li>
                </ul>

				<ul>
			        <li>
						<h5 className="address">Website<br></br>yoursite.com</h5>
							
					</li>
                </ul>
				</div>

				<div class="Form">
					<div className="Map">
						<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://capcuttemplate.org/"></a></div></div>
						<ul>
							<li>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Name"/>
						</div>
						</li>
					</ul>
					</div>
					<div>
						<ul>
						<li>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Email" />
						</div>
						</li>
						</ul>
					</div>
					<div>
						<ul>
						<li>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Subject" />
						</div>
						</li>
						</ul>
					</div>
					<div><ul>
						<li>
						<div class="form-group">
							<textarea name="" class="form-control1" placeholder="Message"></textarea>
						</div>
						</li>
					</ul>
					</div>
					<div>
						<ul>
						<li>
						<div class="form-group">
							<input type="submit" value="Send Message" class="btn btn-primary" />
						</div>
						</li>
					</ul>
					
					</div>
			</div>
			
			<Footer/>
		</>
	)
}

export default ContactUs;