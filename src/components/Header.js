import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logofr from '../assets/logofr.png';
import { Link } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate(); 
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            // Sign-out successful.
          }).catch((error) => {
            navigate("/error");
            // An error happened.
          });
    }
  return (
  
    
     <div className="w-screen px-8 py-2 flex justify-between">
      <img src={logofr} alt='logoimg' className='h-16 w-28invert invert' />
      <div className='top-0 items-center'>
        <nav className='flex gap-[65%] mt-4 mr-96'>
       {/* <a href="#" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">Home</a>
        <a href="#" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">Features</a>
        <a href="#" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">Solutions</a>
        <a href="#" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">FAQ</a>  */}
      <Link to="/browse" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">Home</Link>
  
      <Link to="/InputForm" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">InputForm</Link>
      <Link to="/ftre" className="nav-item font-myFont2 text-2xl text-white relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">Features</Link>
        </nav>
      </div>
        <div className='grid grid-cols-2 ml-40 mt-2'>
        <img src={user?.photoURL} alt="profile" className="h-12 w-12 rounded-full ml-20" />
        {/* <div className='bg-gradient-to-tl from-black from-20% to-transparent rounded-full  items-center outline outline-1 outline-gray-200 '> */}
        <div className='mt-1'>
          <button onClick={handleSignOut} className="bg-gradient-to-br  from-white from-1%  text-white rounded-full py-2 px-8 text-lg uppercase font-semibold shadow-lg hover:bg-white/30 hover:text-black transition duration-500 ease-in-out outline outline-1 outline-gray-900 font-myFont3 tracking-[0.9px]">
  Sign out
</button></div>

        {/* </div> */}
        </div>
        
      
    </div>
   
  )
};

export default Header