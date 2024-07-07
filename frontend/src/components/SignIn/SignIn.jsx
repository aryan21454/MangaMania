import React from 'react'
import './SignIn.css' 
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';


function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({email: "", password: ""});
  const handleChange = (e)=>{
    const {name, value} = e.target; 
    setInputs({...inputs, [name]: value});  
  }
  // console.log(inputs);
  const submit = async (e)=>{
   try {
    e.preventDefault();
    // console.log(inputs);
   const response =  await axios.post('http://localhost:8000/api/v1/users/login', inputs)
   console.log(response);
  
  if (response.data.message === "User logged in successfully")
    {
      dispatch(authActions.login(response.data.data));
      navigate('/mangalist');
    }

   } catch (error) {
    console.log(error);
   }
  }
  return (
    <div className=' signin flex flex-col md:flex-row'>
     
        <div className=' md:w-2/5 flex flex-col justify-center gap-9 px-10'>
            <h1 className='text-[30px] font-bold text-center'>Log In</h1>
            <div className='flex flex-col text-left gap-5'>
            <div className='flex flex-col'>
            <span className='font-semibold'>Email</span>
            <input type="email" placeholder='Enter Your email' name='email' onChange={handleChange} value={inputs.email}  className="border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2"/>
            </div>
            
            <div className='flex flex-col'>
            <span className='font-semibold'>Password</span>
            <input type="password" placeholder='Create Password' name='password'  onChange={handleChange}  value={inputs.password} className="border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2"/>
            </div>
            <button className='bg-[#5F0F40] text-white mx-auto py-2 px-5 rounded-md mt-3 hover:bg-[#4d1e3b]' onClick={submit}>Log In</button>
        </div> 
        </div>
        <div className="second w-3/5">
            
        </div>

      </div>
 
  )
  
}

export default SignIn
