import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center p-10 bg-white shadow-lg rounded-xl">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4 text-gray-700">Page Not Found</p>
        <Link to="/" className="mt-6 inline-block text-red-600 underline hover:text-red-800 transition">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
