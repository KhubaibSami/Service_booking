// OTPVerificationPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../../assets/images/logo.png';

const OTPVerificationPage = () => {
  const initialValues = {
    otp: '',
  };

  const validationSchema = Yup.object().shape({
    otp: Yup.string().matches(/^\d{6}$/, 'Enter a valid 6-digit OTP').required('OTP is required'),
  });

  const onSubmit = (values) => {
    // Implement logic to handle the submitted OTP
    console.log('OTP submitted:', values.otp);
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
          <h2 className="text-2xl font-bold text-gray-800">Enter OTP</h2>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">OTP</label>
            <input
              type="text"
              name="otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 w-full border rounded-md ${formik.touched.otp && formik.errors.otp ? 'border-red-500' : ''}`}
              placeholder="Enter OTP"
            />
            {formik.touched.otp && formik.errors.otp && (
              <p className="text-sm text-red-500 mt-1">{formik.errors.otp}</p>
            )}
          </div>
          <Link to="/reset">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            disabled={!formik.isValid}
          >
            Verify OTP
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

export default OTPVerificationPage;
