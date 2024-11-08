import React from 'react'
import { MdOutlineSecurity } from 'react-icons/md';
import {FaSliders} from 'react-icons/fa6';
import { LuGraduationCap } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const Second = () => {
  return (
    
  <div className='text-white w-full h-full mt-52 bg-slate-950 mb-20'>  
  <p className='text-center font-MONO text-[33px] tracking-wider pb-5 pt-8 '>SECURE</p>
  <p className='text-center font-MONO text-[30px] leading-9 tracking-widest pb-8'> Safeguard every transaction with a powerful, scalable credit card fraud                             
  detection system tailored to meet your business needs</p>
  <div className='flex flex-row'>
  <div className='flex flex-row'>< MdOutlineSecurity />
  <p><span>User Control and Privacy</span>
Allow users control over their data 
with easy opt-out and data deletion 
f eatures, showing that 
privacy is a priority.</p></div>
<div className='flex flex-row'><FaSliders /><p> <span>Continuous Monitoring </span>
Highlight that your platform employs 
r eal-time monitoring, machine 
l earning models, or frequent updates 
t o detect fraud patterns, ensuring 
proactive risk management.</p></div>
  </div>
<div className='flex flex-row'>
<div className='flex flex-row'>< LuGraduationCap/><p><span>Educational Resources</span>
  Provide users with educational 
content about fraud prevention and 
tips on protecting their credit card 
information, positioning your website 
as an authoritative and helpful 
resource.
  </p></div>
  <div className='flex flex-row'>
  <IoShieldCheckmarkOutline /><p><span>Transparency</span>
  Provide clear terms of service, 
privacy policies, and details on how 
user data is collected, processed, and 
stored. Offering 
t ransparency builds trust.
  </p>
  </div>
</div>
</div>
   
  )
}

export default Second
