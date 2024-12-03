import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { RxDropdownMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from '../../store';
function Navbar() {
    const isLoggedin = useSelector((state)=>state.isLoggedin);
    const dispatch = useDispatch();
    const [isopen  , setisopen] = useState(false);
  return (
    <div>
       <nav className="bg-gradient-to-r from-[rgb(95,15,64)] to-[rgb(49,14,104)] p-4 px-6">
      <div className="container mx-auto flex justify-between ">
        
        <div className="text-white  text-xl font-bold flex flex-row items-center gap-5">
          MangaMania
        </div>
        <div className="md:hidden flex space-x-4 ">
        <Link to="/home" className="text-white hover:text-gray-400">
            <CgProfile className=" inline-block w-8 h-8"/> 
          </Link>
          <div>
          <button onClick={()=>setisopen(!isopen)} className="text-white ease-in-out duration-300">
            <RxDropdownMenu className="w-8 h-8"/>
          </button>
          {isopen && (
        <div className="md:hidden ">
          <Link to="/home" className="block text-white hover:text-gray-400 p-2">Home</Link>
          {!isLoggedin && <>
            <Link to="/signin" className="text-white hover:text-gray-400">Sign In</Link>
          <Link to="/signup" className="text-white hover:text-gray-400">Sign Up</Link>
          </>}
          <Link to="/aboutus" className="block text-white hover:text-gray-400 p-2">About Us</Link>
          <Link to="/mangalist" className="text-white hover:text-gray-400">Manga List</Link>
          
          {isLoggedin && <>
            <div onClick={()=>{dispatch(authActions.logout())}}>
            <Link to="#" className="block text-white hover:text-gray-400 p-2">Logout</Link>
            </div>
          </>}
        </div>
      )}
          </div>
          
        </div>

        <div className="hidden md:flex space-x-10 md:items-center">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          {!isLoggedin && <>
            <Link to="/signin" className="text-white hover:text-gray-400">Sign In</Link>
          <Link to="/signup" className="text-white hover:text-gray-400">Sign Up</Link>
          </>}         
          <Link to="/aboutus" className="text-white hover:text-gray-400">About Us</Link>
          <Link to="/mangalist" className="text-white hover:text-gray-400">Manga List</Link>
          {isLoggedin && <>

            <div onClick={()=>{
              sessionStorage.clear();
              dispatch(authActions.logout())}}>
            <Link to="#" className="block text-white hover:text-gray-400 p-2">Logout</Link>
            </div>
          </>}
          
        </div>
        



      </div>
    </nav>
    </div>
  )
}

export default Navbar
