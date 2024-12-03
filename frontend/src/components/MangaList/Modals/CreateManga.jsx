import React, {useEffect, useState } from 'react'
import './CreateManga.css'
import axios from 'axios';
axios.defaults.withCredentials = true;
function CreateManga({setIsAdd,setArr}) {
    const [input, setInput] = useState({ name: "", type: "", chapter: 0, linktoread: "" });
    
    
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setInput({
            ...input,
            [name]: value
          });
        };
        
    const handleAdd = async() =>{
      if (true){
       const res=  await axios.post(`http://localhost:8000/api/v1/mangas/addManga`, input )
       console.log(res);
        setInput({ name: "", type: "", chapter: 0, linktoread: "" });
      }
      else 
      {
        setArr(prevArr => [...prevArr, input ] )
        setInput({ name: "", type: "", chapter: 0, linktoread: "" });
      }
    }
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`http://localhost:8000/api/v1/mangas/getMangaList`,{ withCredentials: true });
        setArr(res.data.data);
      }
      fetchData();
    }, [handleAdd]);
    

    
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
        <button className='px-5 w-[100px] py-2 mx-5 py-2 border  text-white rounded-md' onClick={handleAdd}>Add</button>
        <button className='px-5 w-[100px] py-2 border text-white rounded-md' onClick={()=>setIsAdd(false)}>Cancel</button>
        </div>
    </div>
    </div>
  )
}

export default CreateManga
