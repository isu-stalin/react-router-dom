import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={()=> navigate(`/`)}>INeedLogo</h2>
        <nav className="flex gap-6 text-sm font-semibold text-gray-700">
          <NavLink className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} to="/recipes">Recipes</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} to="/users">Users</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} to="/posts">Posts</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} to="/login">Sign in</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} to="/dashboard">Dashboard</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
