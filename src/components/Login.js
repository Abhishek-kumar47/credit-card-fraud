import React from 'react'
import LoginImage from '../assets/Login.png'
const Login = () => {
  return (
    <div className="w-screen h-screen bg-black flex">
      <img className="px-14 m-8 rounded-md" src={LoginImage} alt="login"/>
        <form className="text-white absolute w-3/12 my-36 mx-36 right-20 ">
            <h1 className="font-bold text-3xl py-2 my-2">Login</h1>
            <h2 className="pb-2 mb-3">Enter your email and password below</h2>
            <input type ="text" placeholder="Email Address" className="p-4 my-4 w-full rounded-md"/>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full rounded-md"/>
            <button className="p-4 my-6 bg-blue-700 w-full rounded-md">Login</button>
            <h2 className="px-16">Don,t have an account? <span className="text-blue-700">Sign Up</span></h2>
 
        </form>
      </div>
    
  )
}

export default Login
