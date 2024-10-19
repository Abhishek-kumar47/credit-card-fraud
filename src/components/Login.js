import React, { useState } from 'react'
import LoginImage from '../assets/Login.png'
const Login = () => {
    const [isLogInForm, setIsLogInForm]= useState();

const toggleLogInForm = () => {
    setIsLogInForm(!isLogInForm);

}

  return (
    <div className="w-screen h-screen bg-black flex">
      <img className="px-14 m-8 rounded-md" src={LoginImage} alt="login"/>
        <form className="text-white absolute w-3/12 my-36 mx-36 right-20 ">
            <h1 className="font-bold text-3xl py-2 my-2">{isLogInForm? "Login" : "Sign UP"}</h1>
            <h2 className="pb-2 mb-3">{isLogInForm? "Enter your email and password below" : "Enter Name, Email and Password below"}</h2>
           {!isLogInForm && (<input type ="text" placeholder="Full Name" className="p-4 my-4 w-full rounded-md"/>)}
            <input type ="text" placeholder="Email Address" className="p-4 my-4 w-full rounded-md"/>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full rounded-md"/>
            <button className="p-4 my-6 bg-blue-700 w-full rounded-md">{isLogInForm? "Login" : "Sign UP"}</button>
            <h2 className="px-16 cursor-pointer" onClick={toggleLogInForm}>{isLogInForm? "Don't have an account? " : "Already have an account? "}<span className="text-blue-700">{isLogInForm? "Sign Up" : "Login"}</span></h2>
 
        </form>
      </div>
    
  )
}

export default Login
