import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#1a1a2e] text-gray-300 py-12 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        
        <div className="bg-[#111] rounded-lg p-6 w-full lg:w-1/3 mb-8 lg:mb-0">
          <p className="text-orange-500 font-bold text-sm uppercase mb-2">Feedback</p>
          <p className="text-2xl text-gray-300 mb-4">Seeking personalized support? <span className="text-white font-semibold">Request a call from our team</span></p>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 bg-[#222] rounded-md border border-gray-600 text-gray-300"
            />
            <input 
              type="text" 
              placeholder="Phone Number" 
              className="w-full p-3 bg-[#222] rounded-md border border-gray-600 text-gray-300"
            />
            <button className="w-full py-3 bg-orange-600 rounded-md text-white font-semibold hover:bg-orange-700 transition duration-200">
              Send a request
            </button>
          </form>
          
          <p className="text-gray-500 mt-4">Privacy</p>
        </div>

       
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <p className="text-orange-500 font-bold text-sm uppercase mb-2">Info</p>
          <ul className="space-y-2">
            <li>Company</li>
            <li>Products</li>
            <li>Engineering</li>
            <li>Services</li>
            <li>Productions</li>
          </ul>
        </div>

       
        <div className="flex flex-col lg:w-1/3 space-y-8">
       
          <div>
            <p className="text-orange-500 font-bold text-sm uppercase mb-2">Contact Us</p>
            <p>(+91) 7827782297</p>
            <p>India</p>
          </div>

      
          <div>
            <p className="text-orange-500 font-bold text-sm uppercase mb-2">Subscription</p>
            <div className="flex items-center border-b border-gray-600 pb-2">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="bg-transparent w-full text-gray-300 outline-none"
              />
              <button className="text-orange-600 text-lg ml-2 hover:text-orange-700 transition duration-200">
                &gt;
              </button>
            </div>
          </div>

      
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-2xl hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-orange-500 cursor-pointer" />
            <FaYoutube className="text-2xl hover:text-orange-500 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        © 2024 — Copyright
      </div>
    </div>
  );
};

export default Footer;
