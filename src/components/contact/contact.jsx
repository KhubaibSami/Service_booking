// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const ContactForm = () => {
//   const initialValues = {
//     email: '',
//     subject: '',
//     message: '',
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email address').required('Required'),
//     subject: Yup.string().required('Required'),
//     message: Yup.string().required('Required'),
//   });

//   const onSubmit = (values, { resetForm }) => {
//     // Handle form submission here
//     console.log('Form submitted:', values);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       <Form className="bg-blue-50 dark:bg-blue-900 p-6 rounded-md shadow-md max-w-md mx-auto">
//         <h2 className="mb-4 text-2xl font-bold text-center text-blue-900 dark:text-white">Contact Us</h2>
        
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Your Email</label>
//           <Field
//             type="email"
//             id="email"
//             name="email"
//             className="w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:border-blue-300 dark:bg-blue-700 dark:text-white"
//           />
//           <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//         </div>
        
//         <div className="mb-4">
//           <label htmlFor="subject" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Subject</label>
//           <Field
//             type="text"
//             id="subject"
//             name="subject"
//             className="w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:border-blue-300 dark:bg-blue-700 dark:text-white"
//           />
//           <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
//         </div>
        
//         <div className="mb-4">
//           <label htmlFor="message" className="block mb-2 text-sm font-medium text-blue-900 dark:text-white">Your Message</label>
//           <Field
//             as="textarea"
//             id="message"
//             name="message"
//             rows="4"
//             className="w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:border-blue-300 dark:bg-blue-700 dark:text-white"
//           />
//           <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
//         </div>
        
//         <button
//           type="submit"
//           className="w-full py-3 px-5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Send Message
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;
