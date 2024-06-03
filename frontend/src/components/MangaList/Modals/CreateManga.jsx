import React, {useEffect, useState } from 'react'
import './CreateManga.css'
import axios from 'axios';
function CreateManga({setIsAdd,setArr}) {
    const [input, setInput] = useState({ name: "", type: "", chaptersRead: 0, linkToRead: "" });
    let id = sessionStorage.getItem('id');
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setInput({
            ...input,
            [name]: value
          });
          console.log(name,value);
        };
        
    const handleAdd = async() =>{
      if (id) {
        await axios.post(`http://localhost:5000/api/v2/addManga`, {...input,id:id} ).then((res)=>console.log(res));
        setInput({ name: "", type: "", chaptersRead: 0, linkToRead: "" });
      }
        
        
      else 
      {
        setArr(prevArr => [...prevArr, input ] )
        setInput({ name: "", type: "", chaptersRead: 0, linkToRead: "" });
      }
    }
    useEffect(() => {
      const fetchData = async () => {
        await axios.get(`http://localhost:5000/api/v2/getMangaList/${id}`).then((res)=>setArr(res.data.list));
      }
      fetchData();
    }, [handleAdd]);
    

    
  return (
    <div className="modal-container flex justify-center items-center">
    <div className='modal flex flex-col justify-center items-center w-[500px] h-[400px] rounded-lg shadow-2xl'>
        <div className='flex flex-col space-y-5'>
        <input type="text" name='name' value={input.name} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Manga Name'  onChange={handleChange} />  
        <input type="text" name='type'value={input.type} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Manga or Manhwa' onChange={handleChange}/>
        <input type="number" name='chaptersRead' value={input.chaptersRead} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Chapters readed' onChange={handleChange}/>
        <input type="text" name='linkToRead' value={input.linkToRead} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" placeholder='Link to Read Manga' onChange={handleChange} />
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
