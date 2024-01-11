// EmailInputPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../../assets/images/logo.png';

const EmailInputPage = () => {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const onSubmit = (values) => {
    // Implement logic to handle the submitted email
    console.log('Email submitted:', values.email);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <div className="mb-6 text-center">
          <img src={logo} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Enter Your Email</h2>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 w-full border rounded-md ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
              placeholder="name@company.com"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
            )}
          </div>
         <Link to="/otp">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            disabled={!formik.isValid}
          >
            Continue
          </button>
          </Link>
        </form>

        <p className="text-sm text-center mt-4">
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EmailInputPage;
