// PasswordResetPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../../../assets/images/logo.png';
import SuccessModal from '../popup/reset'; // Import the SuccessModal component

const PasswordResetPage = () => {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const initialValues = {
    newPassword: '',
    confirmNewPassword: '',
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('New password is required'),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const onSubmit = (values) => {
    // Implement logic to handle the submitted new password
    console.log('New password submitted:', values.newPassword);
    setSuccessModalOpen(true); // Open the success modal
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <form className="bg-white p-8 rounded shadow-md" onSubmit={formik.handleSubmit}>
          <div className="mb-6 text-center">
            <img className="w-20 h-20 mx-auto" src={logo} alt="Logo" />
            <h2 className="text-2xl font-bold mt-4">Password Reset</h2>
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
              {...formik.getFieldProps('newPassword')}
            />
            {formik.touched.newPassword && formik.errors.newPassword && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.newPassword}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-600">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
              {...formik.getFieldProps('confirmNewPassword')}
            />
            {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && (
              <p className="mt-1 text-xs text-red-500">{formik.errors.confirmNewPassword}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              disabled={!formik.isValid}
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>

      {/* Render the SuccessModal component */}
      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setSuccessModalOpen(false)} />
    </div>
  );
};

export default PasswordResetPage;
