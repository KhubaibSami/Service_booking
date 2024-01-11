import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import logo from "../../../../assets/images/logo.png";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the Terms and Conditions'),
});

const Signup = () => {
  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic
    console.log('Google sign-in clicked');
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook sign-in logic
    console.log('Facebook sign-in clicked');
  };

  const handleSubmit = (values) => {
    // Handle form submission logic
    console.log('Form submitted:', values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: SignupSchema,
    onSubmit: handleSubmit,
  });

  return (
    <section className="bg-blue-500 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900dark mb-6 text-center">
          Create an account
        </h1>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-400">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="bg-white border border-blue-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-blue-300 dark:placeholder-gray-500 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-sm text-red-500 mt-1">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="bg-white border border-blue-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-blue-300 dark:placeholder-gray-500 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-sm text-red-500 mt-1">{formik.errors.password}</div>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-blue-400">
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="bg-white border border-blue-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-blue-300 dark:placeholder-gray-500 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="••••••••"
              required
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-sm text-red-500 mt-1">{formik.errors.confirmPassword}</div>
            )}
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              className="w-4 h-4 border border-blue-300 rounded bg-white focus:ring-3 focus:ring-blue-500 dark:border-blue-300"
              required
            />
            <label htmlFor="terms" className="ml-3 text-sm font-light text-blue-400">
              I accept the{' '}
              <a className="font-medium text-blue-200 hover:underline dark:text-blue-300" href="#">
                Terms and Conditions
              </a>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-sm text-red-500 mt-1">{formik.errors.terms}</div>
          )}
          <button
            type="submit"
            className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Create an account
          </button>
          <p className="text-sm font-light text-blue-400 mt-2">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-200 hover:underline dark:text-blue-300">
              Login here
            </Link>
          </p>
        </form>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-1/2 h-12 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm"
          >
            <span className="mr-2">
              <FaGoogle />
            </span>
            Sign up with Google
          </button>
          <button
            type="button"
            onClick={handleFacebookSignIn}
            className="flex items-center justify-center w-1/2 h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm"
          >
            <span className="mr-2">
              <FaFacebook />
            </span>
            Sign up with Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
