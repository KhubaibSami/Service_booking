import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      Navigate("/");
    }
    Dispatch(reset());
  }, [user, isError, isSuccess, message, Navigate, Dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      Dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-semibold mb-6">
        {" "}
        <FaUser /> Register Yourself
      </h1>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            id="name"
            name="name"
            value={name}
            placeholder="Enter Name please.."
            onChange={onChange}
          />
        </div>
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
        <div className="mb-6">
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password please.."
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

export default Register;
