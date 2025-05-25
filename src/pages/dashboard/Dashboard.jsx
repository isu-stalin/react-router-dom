import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './style.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='flex min-h-screen'>
      <div className='w-[250px] bg-slate-800 text-white p-4 shadow-lg'>
        <h2 className="text-2xl font-bold mb-6 cursor-pointer" onClick={()=>navigate
          (`/dashboard`)
        } >📊 Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink className="sidebar-link" end to="">Group</NavLink>
          <NavLink className="sidebar-link" to="student">Student</NavLink>
          <NavLink className="sidebar-link" to="profile">Profile</NavLink>
          <NavLink className="sidebar-link" to="courses">Courses</NavLink>
          <NavLink className="sidebar-link" to="teachers">Teachers</NavLink>
          <NavLink className="sidebar-link" to="notifications">Notifications</NavLink>
          <NavLink className="sidebar-link" to="my-files">My Files</NavLink>
          <NavLink className="sidebar-link" to="briefing">Briefings</NavLink>
          <NavLink className="sidebar-link" to="records">Records</NavLink>
          <NavLink className="sidebar-link" to="settings">Settings</NavLink>
        </nav>
      </div>

      <div className='flex-1 bg-gray-50'>
        <div className='h-16 bg-slate-800 flex items-center justify-between px-6 text-white shadow'>
          <h1 className="text-xl font-semibold">Admin Panel</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            ← Go Home
          </button>
        </div>
        <div className='p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
