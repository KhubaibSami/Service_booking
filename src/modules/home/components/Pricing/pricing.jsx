import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const pricingData = [
  {
    title: "Cleaning",
    description: "Best option for personal use & for ",
    price: "$29",
    features: [
      "Plumber",
      "Pipelining",
      "Water Tank",
      "Electronics",
      "Furniture",
    ],
  },
  {
    title: "Plumber",
    description: "Best option for personal use & for ",
    price: "$99",
    features: [
      "Plumber",
      "Pipelining",
      "Water Tank",
      "Electronics",
      "Furniture",
    ],
  },
  {
    title: "Personal care",
    description: "Best option for personal use & for ",
    price: "$99",
    features: [
      "Plumber",
      "Pipelining",
      "Water Tank",
      "Electronics",
      "Furniture",
    ],
  },
  {
    title: "Personal care",
    description: "Best option for personal use & for ",
    price: "$99",
    features: [
      "Plumber",
      "Pipelining",
      "Water Tank",
      "Electronics",
      "Furniture",
    ],
  },
  // Add more pricing data as needed
];

const Pricing = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-gray-100">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Affordable price
          </h2>
          <p className="mb-5 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            hendrerit ligula.
          </p>
        </div>
        <Slider {...sliderSettings}>
          {pricingData.map((pricing, index) => (
            <PricingCard key={index} {...pricing} />
          ))}
        </Slider>
      </section>
    </>
  );
};

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="flex flex-col p-6 mx-6 text-center bg-white rounded-lg border border-gray-900 shadow dark:border-gray-600 xl:p-4  ">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="font-light text-gray-800 sm:text-base dark:text-gray-800">
        {description}
      </p>
      <div className="flex justify-center items-baseline my-4">
        <span className="mr-2 text-3xl font-extrabold ">{price}</span>
        <span className="dark:text-gray-300">/starting</span>
      </div>
      <ul role="list" className="mb-4 space-y-2 text-left mt-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-800 dark:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/request"
        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-18 mt-16 py-2 text-center dark:text-white dark:focus:ring-blue-900"
      >
        Get started
      </Link>
    </div>
  );
};

export default Pricing;
