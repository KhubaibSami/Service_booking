import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <div className="bg-black">
        <div id="about-us" data-aos="fade-up" data-aos-duration="1000">
          <img
            src="src/assets/m1.jpg"
            alt=""
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          />
          <div id="about-us-in">
            <h3>ABOUT US</h3>
            <p>
              Home to a 46-bay, multi-tier, floodlit driving range, powered by
              Toptracer Range technology. Complimented by a practice green and
              bunker, coffee shop and American Golf Store. There truly is
              something for everyone as we also boast two outdoor 18-hole
              dinosaur themed crazy golf courses.
            </p>
          </div>
          <img
            src="src/assets/m2.jpg"
            alt=""
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          />
        </div>
        <div className="bg-black">
          <div id="green-div">  
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
            <h4>
              SIGN UP FOR SIDCUP NEWS AND SPECIAL OFFERS STRAIGHT TO YOUR INBOX
            </h4>
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
