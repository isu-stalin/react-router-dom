import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Log in
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition font-semibold cursor-pointer"
          >
            Login
          </button>
          <button className="mt-6 text-blue-600 underline text-sm hover:text-blue-800 transition cursor-pointer" onClick={() => navigate("/")}>Back to home</button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account? <span className="text-blue-600 underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
