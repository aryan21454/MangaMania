import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-[rgb(95,15,64)] to-[rgb(49,14,104)] flex justify-center items-center text-white py-8 px-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Manga Mania</h1>
            <p className="text-sm">&copy; 2024 Manga Mania. All rights reserved.</p>
          </div>
          <div className="relative flex space-x-24 right-[100px]">
            <a href="/about" className="hover:text-gray-400">About Us</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
