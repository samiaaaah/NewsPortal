import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import admin from '../assets/adminlogo.png';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from local storage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Top Navbar */}
      <nav className="fixed top-0 z-40 w-full bg-white shadow-md border-b border-gray-200">
        <div className="px-4 py-3 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <Link to="/admin" className="flex items-center gap-2">
              <img src={logo} className="h-8" alt="Logo" />
              <span className="text-xl font-bold">NEWSPORTAL</span>
            </Link>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full border border-gray-300"
              src={admin}
              alt="user"
            />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 transition-transform duration-300 transform bg-white border-r border-gray-200 shadow-lg ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:w-48`}
      >
        <div className="h-full px-6 py-4 overflow-y-auto bg-white">
          <ul className="space-y-4 font-medium text-gray-700">
            <li>
              <Link
                to="/admin"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/news"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>News</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/category"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>Categories</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>To Website</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  setSidebarOpen(false);
                }}
                className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Header;
