import React from "react";
import "./style.css";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Video = () => {
  const goBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div id="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="src/assets/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div id="page1">
        <h1> RELAX.ORDER.ENJOY.</h1>
        <h2>WELCOME TO HOUSE OF SERVICES!</h2>
        <p>
          Sidcup Family Golf is a multipurpose golf facility located in Sidcup,
          South East London. Passionate about technology, player development and
          making golf fun and accessible to everyone.
        </p>
        <button id="request" className="bg-green-600 hover:bg-green-500 text-white py-4 px-6 rounded-lg font flex items-center my-7 ">
          Post a Request <FaArrowRight className="ml-2" id="right-arrow" />
        </button>
        <div id="arrow" onClick={goBottom}>
          <FaArrowDown className="animate-pulse delay-75 down-arrow " />
        </div>
      </div>
    </>
  );
};

export default Video;
