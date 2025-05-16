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
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Sidebar width values
  const sidebarWidth = 'w-64 sm:w-56';

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-4 lg:px-6">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Link to="/admin" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
            <span className="text-xl font-semibold text-gray-800">NEWSPORTAL</span>
          </Link>
        </div>

        {/* Right: Admin Avatar */}
        <div>
          <img
            src={admin}
            alt="Admin"
            className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
          />
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out
          ${sidebarWidth} 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
      >
        <div className="h-full px-4 py-6 overflow-y-auto">
          <ul className="space-y-2 text-gray-700 font-medium">
            {[
              { name: 'Dashboard', to: '/admin' },
              { name: 'News', to: '/admin/news' },
              { name: 'Categories', to: '/admin/category' },
              { name: 'To Website', to: '/' },
            ].map(({ name, to }) => (
              <li key={name}>
                <Link
                  to={to}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  <span className="text-base">{name}</span>
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={() => {
                  handleLogout();
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-left rounded-md hover:bg-gray-100 transition"
              >
                <span className="text-base">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

     
    </div>
  );
};

export default Header;
