import Divider from '@mui/material/Divider'
import React from 'react'
import { Link } from 'react-router'



function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
      <img
        src="profile_pic.jpg"
        alt="Full image"
        className="w-10/12 md:w-5/12 mb-6 md:mb-0 rounded-xl shadow-md"
      />

      <div className="flex flex-col justify-center md:ml-10 text-center md:text-left">
        <h3 className="text-4xl md:text-6xl font1 mb-2">
          <span className="text-emerald-500">Hii,</span>
        </h3>

        <h3 className="text-4xl md:text-6xl font4 text-teal-500 mb-4">
          I am a Developer.
        </h3>

        <h5 className="flex flex-wrap justify-center md:justify-start gap-2">
          <span className="text-sm md:text-xl bg-yellow-400 text-white px-2 py-1 rounded-md">
            JavaScript
          </span>
          <span className="text-sm md:text-xl bg-blue-500 text-white px-2 py-1 rounded-md">
            TypeScript
          </span>
          <span className="text-sm md:text-xl bg-green-500 text-white px-2 py-1 rounded-md">
            Node.js
          </span>
          <span className="text-sm md:text-xl bg-blue-400 text-white px-2 py-1 rounded-md">
            React.js
          </span>
        </h5>
      </div>
    </div>
  );
}


export default Home
