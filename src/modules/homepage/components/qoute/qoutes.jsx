import React, { useEffect } from "react";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Qoutes = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
    <div className="bg-black">
      <div
        id="page3"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <p>
          Excellent couple of hours, relax and enjoy in the fun. Staff were
          accommodating, friendly and very helpful. Café on site for
          refreshments etc. Will keep children enterntained during the holidays.
          Worth a visit if you haven’t been.
        </p>
        <img
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          id="colon1"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
          alt=""
        />
        <img
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          id="colon2"
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
          alt=""
        />
      </div>
      </div>
    </>
  );
};

export default Qoutes;
