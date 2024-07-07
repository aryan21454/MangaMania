import React, { useState } from 'react'
import './MangaList.css'
import CreateManga from './Modals/CreateManga';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdInsertLink } from "react-icons/md";
import { ImFilesEmpty } from "react-icons/im";
import UpdateManga from './Modals/UpdateManga';
import axios from 'axios';
import { useEffect } from 'react';
function MangaList() {
 const [arr , setArr] = useState([]);
    const [isAdd, setIsAdd] = useState(false);
    const [isUpdate , setIsUpdate ] = useState(false);
    const [currIndex , setcurrIndex ] = useState(0);
    
    
    
    const handleDelete = async(id) =>{
     
        try{
          await axios.delete(`http://localhost:8000/api/v1/mangas/deleteManga/${id}`,{data:{id:id},}).then((res)=>console.log(res));
        }
        catch(err)
        {
          console.error(err);
        }

        
        
    // setArr([...arr]);
    }
    useEffect(() => {
   
      
       try {
         const fetchData = async () => {
         const res=   await axios.get(`http://localhost:8000/api/v1/mangas/getMangaList`);
         setArr(res.data.data);  
       }
       fetchData();
       } catch (error) {
        console.log(error); 
       }
    }, [handleDelete]);
  return (
    <div className="mangalist flex flex-col items-center">
        <table className="w-[90%] text-white min-h-[400px] ">
        <thead>
          <tr>
            <th className="py-2 px-2 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-1 border-b">Chapters Read</th>
            <th className="py-2 px-2 border-b">Link to Read</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
            {arr.length !== 0 && arr.map((items,index)=>(
                <tr key={index} className=''>
                <td>{index+1}</td>
                <td>{items.name }</td>
                <td>{items.type}</td>
                <td>{items.chaptersRead}</td>
                <td><a href={items.linkToRead} className='w-fit h-fit'><MdInsertLink className='w-[24px] h-[24px]'/></a></td>
                <td>
                    <div className='flex flex-row space-x-7 '>
                        <MdEdit className='w-[24px] h-[24px] hover:cursor-pointer ' onClick={() => {setIsUpdate(!isUpdate);setcurrIndex(index);}}/>
                        <MdDelete className='w-[24px] h-[24px] text-red-600 hover:cursor-pointer' onClick={()=>handleDelete(items._id)} />
                    </div>
                </td>
              </tr>
                
            )) }
          
        </tbody>
        
          
      </table>
      {arr.length === 0 && <div className=' flex flex-col justify-center items-center text-white font-bold'> <ImFilesEmpty className='w-[64px] h-[64px]'/> 
           <h1 className='text-center mb-6 text-[48px]'>Your manga list is currently empty !</h1>
           </div>}
      <button
        className='px-5 py-2 bg-[#310e68d5] hover:bg-[#310e68] mb-9  text-white rounded-md'
        onClick={() => setIsAdd(!isAdd)} // Corrected capitalization
      >
        Add Manga
      </button>      
      {isAdd && <CreateManga setIsAdd={setIsAdd} setArr={setArr} />}
      {isUpdate && <UpdateManga setIsUpdate={setIsUpdate} setArr={setArr} arr={arr} index={currIndex} />}
    </div>
  )
}

export default MangaList
