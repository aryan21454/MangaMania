import React from 'react'
import gojo from '../../images/gojo.jpg'
import sukuna from '../../images/sukuna.png'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home bg-slate-100   flex flex-col justify-center items-center mx-auto'>
      <div className='relative container text-white  bottom-10'>
      <h1 className='text-center text-[35px] md:text-[45px] font-bold mb-5 '>Track Your Manga <br />Journey Effortlessly!</h1>
    <p className='text-center text-[20px] md:text-[25px] px-4'>Stay on top of your manga reading with our comprehensive tracker. Discover, track, and never miss an update again.</p>
      </div>
    <Link to='/mangalist'>
    <button className='px-7 py-3 bg-[#310e68d5] hover:bg-[#310e68] mb-9  text-white rounded-md'>Add Manga</button>
    </Link>    
    </div>
  )
}

export default Home
