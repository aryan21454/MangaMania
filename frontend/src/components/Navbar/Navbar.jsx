import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { RxDropdownMenu } from "react-icons/rx";

function Navbar() {
    const [isopen  , setisopen] = useState(false);
  return (
    <div>
       <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between ">
        <div className="text-white text-lg font-bold">
          MangaMania
        </div>
        <div className="md:hidden flex space-x-4 ">
        <a href="#" className="text-white hover:text-gray-400">
            <CgProfile className=" inline-block w-8 h-8"/> 
          </a>
          <div>
          <button onClick={()=>setisopen(!isopen)} className="text-white">
            <RxDropdownMenu className="w-8 h-8"/>
          </button>
          {isopen && (
        <div className="md:hidden">
          <a href="#home" className="block text-white hover:text-gray-400 p-2">Home</a>
          <a href="#signin" className="block text-white hover:text-gray-400 p-2">Sign In</a>
          <a href="#signup" className="block text-white hover:text-gray-400 p-2">Sign Up</a>
          <a href="#aboutus" className="block text-white hover:text-gray-400 p-2">About Us</a>
          <a href="#logout" className="block text-white hover:text-gray-400 p-2">Logout</a>
        </div>
      )}
          </div>
          
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#signin" className="text-white hover:text-gray-400">Sign In</a>
          <a href="#signup" className="text-white hover:text-gray-400">Sign Up</a>
          <a href="#aboutus" className="text-white hover:text-gray-400">About Us</a>
          <a href="#logout" className="text-white hover:text-gray-400">Logout</a>
          <a href="#" className="text-white hover:text-gray-400">
            <CgProfile className="inline-block w-8 h-8"/> 
          </a>
        </div>
        



      </div>
    </nav>
    </div>
  )
}

export default Navbar
