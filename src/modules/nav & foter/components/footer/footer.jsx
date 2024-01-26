import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram, FaGithub, FaTimes } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const footerColumns = [
    {
      title: "company",
      links: [
        { text: "about us", url: "/about-us" },
        { text: "our services", url: "/services" },
        { text: "privacy policy", url: "/privacy-policy" },
        { text: "affiliate program", url: "/affiliate-program" },
      ],
    },
    {
      title: "get help",
      links: [
        { text: "FAQ", url: "/faq" },
        { text: "shipping", url: "/shipping" },
        { text: "returns", url: "/returns" },
        { text: "order status", url: "/order-status" },
        { text: "payment options", url: "/payment-options" },
      ],
    },
    {
      title: "online shop",
      links: [
        { text: "watch", url: "/watch" },
        { text: "bag", url: "/bag" },
        { text: "shoes", url: "/shoes" },
        { text: "dress", url: "/dress" },
      ],
    },
    {
      title: "follow us",
      links: [
        { icon: <FaFacebook />, url: "https://www.facebook.com/" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/" },
        { icon: <FaGithub />, url: "https://github.com/" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <footer
        className="footer"
        data-aos="zoom-out-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <div className="container">
          <div className="row">
            {footerColumns.map((col, index) => (
              <div key={index} className="footer-col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.icon ? (
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.icon}
                        </a>
                      ) : (
                        <Link to={link.url}>{link.text}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
