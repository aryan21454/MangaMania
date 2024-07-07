import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({email: "", username: "", password: ""});
  const handleChange = (e)=>{
    const {name, value} = e.target; 
    setInputs({...inputs, [name]: value});  
  }
  const submit = async (e)=>{
    e.preventDefault();
    await axios.post('http://localhost:8000/api/v1/users/register', inputs).then((response)=> {
      if (response.data.message === "User created successfully")
        {
          alert(response.data.message);
          setInputs({email: "", username: "", password: ""});
          navigate('/signin');
        }
        else {
          alert(response.data.message);
        }
      
    
    }); 
    
  
    
  }
  return (
    <div className='signup flex flex-col md:flex-row'>
     
        <div className=' md:w-2/5 flex flex-col justify-center gap-9 px-10'>
            <h1 className='text-[30px] font-bold text-center'>Create an Account</h1>
            <div className='flex flex-col text-left gap-5'>
            <div className='flex flex-col'>
            <span className='font-semibold'>Email</span>
            <input type="email" placeholder='Enter Your email' name='email' onChange={handleChange}  className="border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2" value={inputs.email}/>
            </div>
            <div className='flex flex-col '>
            <span className='font-semibold'>Username</span>
            <input type="text" placeholder='Create a username' name='username' onChange={handleChange} className="border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2" value={inputs.username} />
            </div>
            <div className='flex flex-col'>
            <span className='font-semibold'>Password</span>
            <input type="password" placeholder='Create Password' name='password' onChange={handleChange} className="border border-gray-300 focus:border-blue-500 rounded-md px-4 py-2" value={inputs.password}/>
            </div>
            <button className='bg-[#5F0F40] text-white mx-auto py-2 px-5 rounded-md mt-3 hover:bg-[#4d1e3b]' onClick={submit} >Sign Up</button>
        </div> 
        </div>
        <div className="second w-3/5">
            
        </div>

      </div>
 
  )
}

export default SignUp
