import React from "react";
import { useState } from "react";
import {  FaSignInAlt } from "react-icons/fa";


const AXLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {  email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-semibold mb-6" > <FaSignInAlt/> Login  </h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            id="email"
            name="email"
            value={email}
            placeholder="Enter email please.."
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password please.."
            onChange={onChange}
          />
        </div>
        
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AXLogin;
