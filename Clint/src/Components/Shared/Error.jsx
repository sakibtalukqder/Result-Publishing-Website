import React from 'react';
import { Link } from 'react-router-dom';

function Error({ message }) {
  return (
    <div className="py-24 flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl text-red-500 font-semibold">404, Not Found...!</h2>
        <p className="text-gray-600 mt-2 mb-5">We're sorry, but something went wrong.</p>
        <div>
        <Link to={'/'}
          className="mt-4 my-11 mb-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Go Back to Homepage
        </Link><br /><br />
        </div>
      </div>
    </div>
  );
}

export default Error;
