import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  
 
     <div className="w-screen h-11 px-8 py-2 flex justify-between">
        <img src={user?.photoURL} alt="profile"/>
      <button onClick={handleSignOut} className="bg-black text-white rounded-md w-28">Sign out</button>
    </div>
   
  )
};

export default Header
