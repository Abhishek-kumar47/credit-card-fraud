import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logofr from '../assets/logofr.png';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  return (
    <div className="w-screen px-8 py-4 bg-black flex justify-between items-center">
      
      {/* Logo aligned to the left */}
      <div className="flex-shrink-0">
        <img src={logofr} alt="logoimg" className="h-16 w-28 invert" />
      </div>
      
      {/* Centered Navigation Links */}
      <div className="flex-grow flex justify-center">
        <nav className="flex gap-48">
          <Link to="/browse" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
            Home
          </Link>
          <Link to="/InputForm" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
            InputForm
          </Link>
          <Link to="/ftre" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
            Features
          </Link>
        </nav>
      </div>
      
      {/* User Profile Icon and Sign Out Button aligned to the right */}
      <div className="flex items-center gap-4">
        <FaCircleUser className="text-white text-3xl" />
        <button 
          onClick={handleSignOut} 
          className="bg-gradient-to-br from-white from-1% text-white rounded-full py-2 px-8 text-lg uppercase font-semibold shadow-lg hover:bg-white/30 hover:text-black transition duration-500 ease-in-out outline outline-1 outline-gray-900 font-myFont3 tracking-[0.9px]"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Header;
