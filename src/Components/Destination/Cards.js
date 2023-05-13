import React, { useState } from 'react'
import './Cards.css';
import { images } from '../../Constant';
import HillStation from './HillStation/HillStation';

function Destination() {
const [active, setActive] = useState(false);
const [active1, setActive1] = useState(false);
const [active2, setActive2] = useState(false);
const [active3, setActive3] = useState(false);
const [active4, setActive4] = useState(false);
const [active5, setActive5] = useState(false);
const [active6, setActive6] = useState(false);
const [active7, setActive7] = useState(false);
const [active8, setActive8] = useState(false);
const [active9, setActive9] = useState(false);
const [active10, setActive10] = useState(false);
const [active11, setActive11] = useState(false);
const handleClick = () => {
	setActive(!active);
	setActive1(false)
	setActive2(false)
	setActive3(false)
}

const handleClick1 = () => {
	setActive(false);
	setActive1(!active)
	setActive2(false)
	setActive3(false)
}

const handleClick2 = () => {
	setActive(false);
	setActive1(false)
	setActive2(!active)
	setActive3(false)
}

const handleClick3 = () => {
	setActive(false);
	setActive1(false)
	setActive2(false)
	setActive3(!active)
}
const handleClick4 = () => {
	setActive4(!active);
	setActive5(false)
	setActive6(false)
	setActive7(false)
}
const handleClick5 = () => {
	setActive4(false);
	setActive5(!active)
	setActive6(false)
	setActive7(false)
}
const handleClick6 = () => {
	setActive4(false);
	setActive5(false)
	setActive6(!active)
	setActive7(false)
}
const handleClick7 = () => {
	setActive4(false);
	setActive5(false)
	setActive6(false)
	setActive7(!active)
}
const handleClick8 = () => {
	setActive8(!active);
	setActive9(false)
	setActive10(false)
	setActive11(false)
}
const handleClick9 = () => {
	setActive8(false);
	setActive9(!active)
	setActive10(false)
	setActive11(false)
}
const handleClick10 = () => {
	setActive8(false);
	setActive9(false)
	setActive10(!active)
	setActive11(false)
}
const handleClick11 = () => {
	setActive8(false);
	setActive9(false)
	setActive10(false)
	setActive11(!active)
}


	return (

		<>
		<Destination/>
			<div class="section-margin-top">
				<a href='/Hillstation'>
					<div class="row1">
						<div class="tm-section-header">
							<div class="col-lg-3 "></div>
							<div class="col-lg-6 col-md-6 col-sm-6"><h1 class="tm-section-title">Hill Station</h1></div>
							<div class="col-lg-3  col-sm-3"></div>
						</div>
					</div>
				</a>
				<div class="row">
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Hillstation'>
							<div class="row">
								<img src={images.Mahabaleshwar} alt="image" />
								<h3>Mahabaleshwar</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick} style={{color: active ? "red":"black"}}   class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Book</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Hillstation'>
							<div class="row">
								<img src={images.Manali} alt="image" />
								<h3>Manali</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick1} style={{color: active1 ? "red":"black"}}   class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Book</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Hillstation'>
							<div class="row">
								<img src={images.Mussorie} alt="image" />
								<h3>Mussorie</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick2} style={{color: active2 ? "red":"black"}}   class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Book</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Hillstation'>
							<div class="row">
								<img src={images.Shillong} alt="image" />
								<h3>Shillong</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick3} style={{color: active3 ? "red":"black"}}   class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Book</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="section-margin-top">
				<a href='/Adventure'>
					<div class="row2">
						<div class="tm-section-header">
							<div class="col-lg-3 "></div>
							<div class="col-lg-6 col-md-6 col-sm-6"><h1 class="tm-section-title">Adventure</h1></div>
							<div class="col-lg-3  col-sm-3"></div>
						</div>
					</div>
				</a>
				<div class="row">
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Adventure'>
							<div class="row">
								<img src={images.Rafting} alt="image" />
								<h3>Rafting</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick4} style={{color: active4 ? "red":"black"}} class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Travel</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Adventure'>
							<div class="row">
								<img src={images.mountainbiking} alt="image" />
								<h3>Mountainbiking</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick5} style={{color: active5 ? "red":"black"}} class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Travel</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Adventure'>
							<div class="row">
								<img src={images.bungeejumping} alt="image" />
								<h3>Bungeejumping</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick6} style={{color: active6 ? "red":"black"}} class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Travel</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Adventure'>
							<div class="row">
								<img src={images.Trekking} alt="image" />
								<h3>Trekking</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick7} style={{color: active7 ? "red":"black"}} class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Travel</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="section-margin-top">
				<a href='/Pilgrimage'>
					<div class="row3">
						<div class="tm-section-header">
							<div class="col-lg-3 "></div>
							<div class="col-lg-6 col-md-6 col-sm-6"><h1 class="tm-section-title">PILGRIMAGE</h1></div>
							<div class="col-lg-3  col-sm-3"></div>
						</div>
					</div>
				</a>
				<div class="row">
				<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Pilgrimage'>
							<div class="row">
								<img src={images.Kedarnath} alt="image" />
								<h3>Kedarnath</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick8} style={{color: active8 ? "red":"black"}} class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Travel</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Pilgrimage'>
							<div class="row">
								<img src={images.Rameshwar} alt="image" />
								<h3>Rameshwar</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick9} style={{color: active9 ? "red":"black"}} class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Travel</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Pilgrimage'>
							<div class="row">
								<img src={images.Dwarka} alt="image" />
								<h3>Dwarka</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick10} style={{color: active10 ? "red":"black"}} class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Travel</span>
								</div>
							</div>
						</a>
					</div>
					<div class="col-lg-3  col-sm-6 col-xs-6 col-xxs-12">
						<a href='/Pilgrimage'>
							<div class="row">
								<img src={images.Somnath} alt="image" />
								<h3>Somnath</h3>
								<div class="tm-home-box-2-container">
									<i onClick={handleClick11} style={{color: active11 ? "red":"black"}} class="fa fa-heart tm-home-box-2-icon border-right"></i>
									<span class="tm-home-box-2">Travel</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Destination;
