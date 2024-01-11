// SuccessModal.jsx

import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root'); // Set the root element to handle accessibility

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mx-auto text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 14h-2v-2h2v2zm0-4h-2V5h2v5z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-xl font-bold mt-4">Password Reset Successful!</h2>
        <p className="text-gray-600 mt-2">Your password has been reset successfully.</p>
        <Link to="/">
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Close
        </button>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
