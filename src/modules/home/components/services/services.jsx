import React from 'react';
import { FaBroom, FaTools, FaUser, FaHandHoldingWater, FaWrench, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <section className="bg-blue-500 dark:bg-gray-300">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-600 ">
              Services we offer
            </h2>
            {/* <p className="text-blue-600 sm:text-xl ">
              Every type of household work with well-experienced labor
            </p> */}
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Cleaning"
              icon={<FaBroom size={32} />}
              bgColor="bg-blue-600"
              textColor="text-white"
              description="We make your space spotless and tidy."
            />
            <ServiceCard
              title="Plumber"
              icon={<FaTools size={32} />}
              bgColor="bg-blue-600"
              textColor="text-white"
              description="Expert plumbing services for your needs."
            />
            <ServiceCard
              title="Personal care"
              icon={<FaUser size={32} />}
              bgColor="bg-blue-600"
              textColor="text-white"
              description="Care services tailored to your personal needs."
            />
            <ServiceCard
              title="Washing"
              icon={<FaHandHoldingWater size={32} />}
              bgColor="bg-blue-600"
              textColor="text-white"
              description="Professional washing solutions for you."
            />
            <ServiceCard
              title="Repairing"
              icon={<FaWrench size={32} />}
              bgColor="bg-blue-600"
              textColor="text-white"
              description="Swift and efficient repair services."
            />
            <ServiceCard
              title="Installation"
              icon={<FaCogs size={32} />}
              bgColor="bg-blue-600"
              textColor="text-white"
              description="Installation services you can trust."
            />
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ title, icon, bgColor, textColor, description }) => {
  return (
    <div className={`p-6 rounded-lg ${bgColor} ${textColor} dark:${bgColor} dark:${textColor}`}>
      <div className="flex justify-center items-center mb-2 w-16 h-16 rounded-full">
        {icon}
      </div>
      <Link to="/request">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-white">{description}</p>
      </Link>
    </div>
  );
};

export default Services;
