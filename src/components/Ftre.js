import React from 'react'
import Header from './Header'

const Ftre = () => {
  return (
    <div className='overflow-hidden'>
    <Header />
    <div className="relative -z-20 w-screen h-screen">
      
      
      <div className="absolute inset-0  bg-gradient-to-b from-purple-400 via-purple-800 to-black opacity-80"></div>
  
      <div className="absolute inset-0 flex items-center justify-center z-50">
       
      </div>
  
    
      <div className="absolute bottom-0 w-full z-50 p-10 bg-opacity-90">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Key Features</h2>
  
        <div className="space-y-8">
         
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white ">
            <h3 className="text-2xl font-semibold mb-2">Adaptive Learning Model</h3>
            <p>
              Employ an adaptive learning model that continuously improves and updates itself based on new fraud patterns and data. This feature enhances the system’s ability to detect emerging fraud trends and helps users stay protected against the latest threats.
            </p>
          </div>
  
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2">Detailed Fraud Analysis and Reports</h3>
            <p>
              Provide users with detailed reports on suspected fraudulent activities, including transaction analysis, geographic data, time stamps, and potential fraud patterns. These insights can help users better understand and address vulnerabilities in their accounts.
            </p>
          </div>
  
          
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2">User-Friendly Dashboard and Control Center</h3>
            <p>
              Offer a user-centric dashboard where users can monitor account activity, customize fraud detection settings, and manage alerts. This feature makes it easy for users to tailor the detection process based on their preferences and risk tolerance.
            </p>
          </div>
  
        
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2">Multi-Layered Authentication</h3>
            <p>
              Integrate multi-factor authentication (MFA) and biometric verification as additional security layers. This feature ensures that even if fraud is detected, unauthorized transactions are blocked by requiring further user authentication, enhancing overall account security.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  


  )
}

export default Ftre
