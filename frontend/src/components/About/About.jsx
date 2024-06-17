import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './About.css'
function About() {
  return (
    <div className="about text-white text-center py-10">
      <div className='w-11/12 max-w-3xl mx-auto flex flex-col gap-y-10'>
        <section className="section">
          <h2 className='text-4xl font-bold'>About MangaTracker</h2>
          <p className='text-lg mt-4'>Welcome to MangaTracker, a project born out of my passion for manga and technology. As a student at IIITD, I've developed MangaTracker to enhance your manga reading experience with simplicity and convenience.</p>
        </section>

        <section className="section">
          <h2 className='text-4xl font-bold'>My Vision</h2>
          <p className='text-lg mt-4'>MangaTracker is designed to streamline manga tracking and discovery. My vision is to provide manga enthusiasts like you with a user-friendly platform to keep track of your favorite manga titles effortlessly.</p>
        </section>

        <section className="section">
          <h2 className='text-4xl font-bold'>Key Features</h2>
          <ul className='text-lg mt-4'>
            <li><strong>Personalized Manga Tracking:</strong> Track your reading progress and favorite manga series.</li>
            <li><strong>Real-time Updates:</strong> Receive notifications for new chapters and updates.</li>
            <li><strong>User-Friendly Interface:</strong> Navigate through manga titles with ease.</li>
          </ul>
        </section>

        <section className="section">
          <h2 className='text-4xl font-bold'>About Me</h2>
          <p className='text-lg mt-4'>I'm Aryan Sharma, a student at IIITD with a passion for manga and technology. MangaTracker is a project that combines my love for manga with my skills in software development.</p>
        </section>

        <section className="section mb-4">
          <h2 className='text-4xl font-bold'>Connect With Me</h2>
          <p className='text-lg mt-4'>Feel free to connect with me to share feedback or suggestions for MangaTracker. Let's make your manga reading experience even better together.</p>
          
        </section>
        <div className='flex flex-row text-[40px] gap-6 mx-auto'>
         <a href="https://linkedin.com/in/aryan21454" target="_blank"> <FaLinkedin/></a>
          <a href="https://github.com/aryan21454" target="_blank"> <FaGithub/></a>
          </div>
      </div>
    </div>
  )
}

export default About;
