import { Component } from "react";
import "./Navbar.css";
import {AiFillHome} from "react-icons/ai";
import {FaUmbrellaBeach} from "react-icons/fa";
import {BsFillInfoCircleFill} from "react-icons/bs";
import {FaAddressBook} from "react-icons/fa";

class Navbar extends Component{
  state = {clicked : false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
      return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo"><a href="/">Holiday</a><h6 className="navbar-logo"><a href="/">Heavens</a></h6></h1>
        <div className="menu-icons" onClick={this.handleClick}><i className={this.state.clicked ? "fas fa-times " :"fas fa-bars"}></i></div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
             <a href="/">
               <i className="Navlink"><AiFillHome className="icon1"/>Home</i>
             </a>
          </li>
          <li>
             <a href="/trips">
               <i className="Navlink"><FaUmbrellaBeach className="icon1"/>Trips</i>
             </a>
          </li>
          <li>
             <a href="/about">
               <i className="Navlink"><BsFillInfoCircleFill className="icon1"/>About</i>
             </a>
          </li>
          <li>
             <a href="/contact">
               <i className="Navlink"><FaAddressBook className="icon1"/>Contact</i>
             </a>
          </li>
          <li>
             <a href="/signup"><button className="nav-link-mobile">SignUp</button>
             </a>
          </li>
        </ul>
      </nav>
      )
  }
}
export default Navbar;