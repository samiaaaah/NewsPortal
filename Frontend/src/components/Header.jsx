import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-[#581B1B] text-white">
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <img src="react.svg" alt="logo" className="h-10 w-10" />
          <h1 className="text-2xl font-serif">Your News Portal</h1>
        </div>
        
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/India" className="hover:underline">India</Link>
          <Link to="/World" className="hover:underline">World</Link>
          <Link to="/Business" className="hover:underline">Business</Link>
          <Link to="/Sports" className="hover:underline">Sports</Link>
          
          <Link to="/Login" className="hover:underline">Login/Dashboard</Link>
       
      </div>
    </header>
  )
}

export default Header
