import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-6 lg:grid-cols-6">
          <PricingCard
            title="Cleaning"
            description="Best option for personal use & for "
            price="$29"
            features={[
              "Plumber",
              "Pipelining",
              "Water Tank",
              "Electronics",
              "Furniture",
            ]}
          />
          <PricingCard
            title="Plumber"
            description="Best option for personal use & for "
            price="$99"
            features={[
              "Plumber",
              "Pipelining",
              "Water Tank",
              "Electronics",
              "Furniture",
            ]}
          />
          <PricingCard
            title="Personal care"
            description="Best option for personal use & for "
            price="$99"
            features={[
              "Plumber",
              "Pipelining",
              "Water Tank",
              "Electronics",
              "Furniture",
            ]}
          />
          <PricingCard
            title="Washing"
            description="Best option for personal use & for"
            price="$19"
            features={[
              "Plumber",
              "Pipelining",
              "Water Tank",
              "Electronics",
              "Furniture",
            ]}
          />
          <PricingCard
            title="Repairing"
            description="Best option for personal use & for "
            price="$39"
            features={[
              "Plumber",
              "Pipelining",
              "Water Tank",
              "Electronics",
              "Furniture",
            ]}
          />
          <PricingCard
            title="Installation"
            description="Best option for personal use & for "
            price="$59"
            features={[
              "Plumber",
              "Pipelining",
              "Water Tank",
              "Electronics",
              "Furniture",
            ]}
          />
        </div>
      </section>
    </>
  );
};

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="flex flex-col p-6 mx-auto text-center bg-white rounded-lg border border-gray-200 shadow dark:border-gray-600 xl:p-8">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="font-light text-gray-800 sm:text-base dark:text-gray-300">
        {description}
      </p>
      <div className="flex justify-center items-baseline my-4">
        <span className="mr-2 text-3xl font-extrabold">{price}</span>
        <span className="dark:text-gray-300">/starting</span>
      </div>
      <ul role="list" className="mb-4 space-y-2 text-left">
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
        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 text-center dark:text-white dark:focus:ring-blue-900"
      >
        Get started
      </Link>
    </div>
  );
};

export default Pricing;
