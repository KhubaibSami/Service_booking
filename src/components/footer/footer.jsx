import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-blue-900 md:p-8 lg:p-10 ">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            to="/"
            className="flex justify-center items-center text-2xl font-semibold text-white dark:text-white"
          >
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo" />
            Services
          </Link>
          <p className="my-6 text-white">
            Open-source library of over 400+ web components and interactive
            elements built for better web.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-white dark:text-white">
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/premium" className="mr-4 hover:underline md:mr-6">
                Premium
              </Link>
            </li>
            <li>
              <Link to="/campaigns" className="mr-4 hover:underline md:mr-6">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/blog" className="mr-4 hover:underline md:mr-6">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/affiliate" className="mr-4 hover:underline md:mr-6">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link to="/faq" className="mr-4 hover:underline md:mr-6">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mr-4 hover:underline md:mr-6">
                Contact
              </Link>
            </li>
          </ul>
          <span className="text-sm text-white sm:text-center ">
            © 2021-2024{" "}
            <Link to="/" className="hover:underline">
              Services™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
