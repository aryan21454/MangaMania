import React, { useState } from 'react'
import './UpdateManga.css'
import axios from 'axios';
import { useEffect } from 'react';
function UpdateManga({setIsUpdate,setArr ,arr , index}) {
    const [input, setInput] = useState(arr[index]);
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setInput({
            ...input,
            [name]: value
          });
        //   console.log(name,value);
        };
        
    const handleUpdate = async () =>{
      
      await axios.put(`http://localhost:8000/api/v1/mangas/updateManga/${input._id}`, input ).then((res)=>console.log(res));
       setIsUpdate(false);
       console.log(arr);
    }
    useEffect(() => {
      
         const fetchData = async () => {
          const res =  await axios.get(`http://localhost:8000/api/v1/mangas/getMangaList`);
           setArr(res.data.data);
         }
         fetchData();
       
     }, [handleUpdate]);
    
  return (
    <div className="modal-container flex justify-center items-center">
    <div className='modal flex flex-col justify-center items-center w-[500px] h-[400px] rounded-lg shadow-2xl'>
        <div className='flex flex-col space-y-5'>
        <input type="text" name='name' value={input.name} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Manga Name'  onChange={handleChange} />  
        <input type="text" name='type'value={input.type} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Manga or Manhwa' onChange={handleChange}/>
        <input type="number" name='chapter' value={input.chapter} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Chapters readed' onChange={handleChange}/>
        <input type="text" name='linktoread' value={input.linktoread} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Link to Read Manga' onChange={handleChange} />
        </div>
        <div  className='mt-6'>
        <button className='px-5 w-[100px] py-2 mx-5 py-2 border  text-white rounded-md' onClick={handleUpdate}>Update</button>
        <button className='px-5 w-[100px] py-2 border text-white rounded-md' onClick={()=>setIsUpdate(false)}>Cancel</button>
        </div>
    </div>
    </div>
  )
}

export default UpdateManga
