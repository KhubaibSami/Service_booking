import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import Aos from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  useEffect(() => {
    Aos.init();
  });

  
  return (
    <>
    <div class="navbar">
        <img class="img" src="src/assets/logo.png" alt="" />
      <div id="nav">
       <Link to="/services">  <h4>SERVICES</h4>  </Link>
       <Link to="/about">   <h4>ABOUT</h4>     </Link>
       <Link to="/contact">   <h4>CONTACT</h4>   </Link>
       <Link to="/login">   <h4>REGISTER</h4>  </Link>
       <Link to="/login">   <h4>LOGIN</h4>     </Link>
    </div>
    </div>
       <div class="navbar-btn">
            <FaBars  class="menu-btn" className="text-2xl mobile-nav-icon"  />
            <FaTimes class="close-btn" className="text-3xl close-btn mobile-nav-icon"  />
       </div>

 
      <div className="fixed bottom right-4 bottom-4 p-3 h-24 w-24 z-10 ">
        <Link
          to="https://wa.me/+923214570726?text=hello I need your help, are you available ?"
          target="_blank"
        >
          <img
            
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
            alt=""
          />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
