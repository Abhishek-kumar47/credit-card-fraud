import React from 'react'
import { MdOutlineSecurity } from 'react-icons/md';
import { BsSliders } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const Second = () => {
  return (
<div className="text-white w-full min-h-screen mt-24 bg-slate-950">
  <p className="text-center font-mono text-[33px] tracking-wider pb-5 pt-8">SECURE</p>
  <p className="text-center font-serif text-[30px] leading-10 tracking-widest pb-8">
    Safeguard every transaction with a powerful, scalable credit card fraud
    detection system tailored to meet your business needs
  </p>
  
  <div className="grid grid-cols-2 gap-8 px-10 mt-12">
    {/* Left Column */}
    <div className="flex flex-col space-y-6">
      {/* User Control and Privacy */}
      <div className="flex items-start space-x-4">
        <span className="text-6xl"><MdOutlineSecurity /></span>
        <div>
          <p className="font-mono text-[32px]">User Control and Privacy</p>
          <p className='text-[24px] font-thin'>
            Allow users control over their data with easy opt-out and data deletion 
            features, showing that privacy is a priority.
          </p>
        </div>
      </div>
      
      {/* Educational Resources */}
      <div className="flex items-start space-x-4">
        <span className="text-6xl"><LuGraduationCap /></span>
        <div>
          <p className="font-mono text-[32px]">Educational Resources</p>
          <p className='text-[24px] font-thin'>
            Provide users with educational content about fraud prevention and tips on 
            protecting their credit card information, positioning your website as an 
            authoritative and helpful resource.
          </p>
        </div>
      </div>
    </div>
    
    {/* Right Column */}
    <div className="flex flex-col space-y-6">
      {/* Continuous Monitoring */}
      <div className="flex items-start space-x-4">
        <span className="text-6xl"><BsSliders /></span>
        <div>
          <p className="font-mono text-[32px]" >Continuous Monitoring</p>
          <p className='text-[24px] font-thin'>
            Highlight that your platform employs real-time monitoring, machine learning 
            models, or frequent updates to detect fraud patterns, ensuring proactive 
            risk management.
          </p>
        </div>
      </div>
      
      {/* Transparency */}
      <div className="flex items-start space-x-4">
        <span className="text-6xl"><IoShieldCheckmarkOutline /></span>
        <div>
          <p className="font-mono text-[32px]">Transparency</p>
          <p className='text-[24px] font-thin'>
            Provide clear terms of service, privacy policies, and details on how user data 
            is collected, processed, and stored. Offering transparency builds trust.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>









//   <div className='text-white w-full h-full mt-52 bg-slate-950 mb-20'>  
//   <p className='text-center font-MONO text-[33px] tracking-wider pb-5 pt-8 '>SECURE</p>
//   <p className='text-center font-MONO text-[30px] leading-9 tracking-widest pb-8'> Safeguard every transaction with a powerful, scalable credit card fraud                             
//   detection system tailored to meet your business needs</p>
//   <div className='grid grid-cols-2'>
//   <div className='flex flex-col'>
//   <div className='flex flex-row'><span className='text-3xl'>< MdOutlineSecurity /></span>
//   <p ><span className='font-mono'>User Control and Privacy</span>
// </p>
// <p>Allow users control over their data 
// with easy opt-out and data deletion 
// f eatures, showing that 
// privacy is a priority. </p></div>
// <div className='flex flex-row'><span className='text-3xl'>< LuGraduationCap/></span><p><span>Educational Resources</span>
//   Provide users with educational 
// content about fraud prevention and 
// tips on protecting their credit card 
// information, positioning your website 
// as an authoritative and helpful 
// resource.
//   </p></div>
// </div>
// <div className='flex flex-col'>

//   <div className='flex flex-row'>
//   <span className='text-3xl'><IoShieldCheckmarkOutline /></span><p><span>Transparency</span>
//   Provide clear terms of service, 
// privacy policies, and details on how 
// user data is collected, processed, and 
// stored. Offering 
// t ransparency builds trust.
//   </p></div>
//   <div className='flex flex-row'><span className='text-3xl'><FaSliders /></span><p> <span>Continuous Monitoring </span>
// Highlight that your platform employs 
// r eal-time monitoring, machine 
// l earning models, or frequent updates 
// t o detect fraud patterns, ensuring 
// proactive risk management.</p></div>
//   </div>
//   </div>
//   </div>


   
  )
}

export default Second
