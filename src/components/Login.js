import React, { useRef, useState } from 'react'
import LoginImage from "../assets/Login.png"
import { checkValidate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isLogInForm, setIsLogInForm]= useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
    const message=checkValidate(email.current.value,password.current.value);
    setErrorMessage(message);
        
        if(message) return;

        if(!isLogInForm){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      }).then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
        // Profile updated!
        // ...
      }).catch((error) => {
        setErrorMessage(error.message);
        // An error occurred
        // ...
      });
    console.log(user);

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage);
    // ..
  });

        }
        else{
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" + errorMessage);
  });

        }
    }; 

const toggleLogInForm = () => {
    setIsLogInForm(!isLogInForm);


}

  return (
    <div className="w-screen bg-black flex">
      <img className=" px-14 m-8 rounded-md" src={LoginImage} alt="login"/>
        <form onSubmit={(e) => e.preventDefault()} className="text-white absolute w-3/12 my-36 mx-36 right-20 ">
            <h1 className="font-bold text-3xl py-2 my-2">{isLogInForm? "Login" : "Sign UP"}</h1>
            <h2 className="pb-2 mb-3">{isLogInForm? "Enter your email and password below" : "Enter Name, Email and Password below"}</h2>
           {!isLogInForm && (<input ref={name} type ="text" placeholder="Full Name" className="text-black p-4 my-4 w-full rounded-md"/>)}
            <input ref={email} type ="text" placeholder="Email Address" className="text-black p-4 my-4 w-full rounded-md"/>
            <input ref={password} type="password" placeholder="Password" className="text-black p-4 my-4 w-full rounded-md"/>
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-6 bg-blue-700 w-full rounded-md" onClick={handleButtonClick}>{isLogInForm? "Login" : "Sign UP"}</button>
            <h2 className="px-16 cursor-pointer" onClick={toggleLogInForm}>{isLogInForm? "Don't have an account? " : "Already have an account? "}<span className="text-blue-700">{isLogInForm? "Sign Up" : "Login"}</span></h2>
 
        </form>
      </div>
    
  )
}

export default Login
