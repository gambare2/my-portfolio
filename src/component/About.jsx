import React from 'react'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router'



const techstacks = [
  {
    name: 'JavaScript',
    color: 'fde047',
    logo: 'javascript'
  },
  {
    name: 'TypeScript',
    color: '93c5fd',
    logo: 'typescript'
  },
  {
    name: 'React',
    color: 'bfdbfe',
    logo: 'react'
  },
  {
    name: 'Node.js',
    color: '86efac',
    logo: 'node.js'
  },
  {
    name: 'Express',
    color: '0da875',
    logo: 'express'
  },
  {
    name: 'MongoDB',
    color: '14b8a6',
    logo: 'mongodb'
  },
  {
    name: 'TailwindCSS',
    color: '38B2AC',
    logo: 'tailwind-css'
  },
  {
    name: 'Git',
    color: 'black',
    logo: 'git'
  },
]


function About() {
  return (
    <div>
      <div className="p-6 border-2 border-gray-400 about-shadow bg-gray-900 text-white  font-sans rounded-lg">
      <h2 className="text-4xl mb-2 text-center"> 👋 Hi there </h2>
      <div className='flex justify-around flex-row'>
        <div className="mb-6 ">
          <h3 className="text-2xl font-semibold mb-6">
            <span>👉 I'm</span> <span className=" font4 text-teal-500 text-5xl">Prince Aryan Singh</span>
          </h3>

          <h4 className="text-xl font-bold">💻 MERN Stack developer</h4>
          <p>📍 Location: Agra, India</p>
          <p>
            📧 Reach me at:{' '}
            
          </p>
          <p>Available in 📞contact section </p>
        </div>
        <img src="profile_pic.jpg" alt="Profile"
          className='size-40' />
      </div>




      <div className="mb-6 ">
        <h4 className="text-xl font-bold mb-2 text-center">🧰 Tech Stack</h4>
        <div className='flex justify-center'>

          <Divider
            orientation='vertical'
            variant='middle'
            sx={{
              width: '17%',
              borderColor: 'white',
              borderWidth: 2,
              opacity: 1,
              alignItems: 'center',
            }} />
        </div>
        <div className="flex flex-wrap gap-2 ">
          {techstacks.map((tech)=> (
            <img
            className='text-xl md:mx-2'
              key={tech.name}
              src={`https://img.shields.io/badge/-${encodeURIComponent(tech.name)}-${tech.color}?style=flat-square&logo=${tech.logo}`}
              alt={tech.name}/>
          ))}
            
            
        </div>
      </div>

     

      <div className="mb-6">
        <h4 className="text-xl font-bold mb-2 text-center">📊 GitHub Stats</h4>
        <div className='flex justify-center'>

          <Divider
            orientation='vertical'
            variant='middle'
            sx={{
              width: '20%',
              borderColor: 'white',
              borderWidth: 2,
              opacity: 1,
              alignItems: 'center',
            }} />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
          <img
            src="https://github-readme-stats.vercel.app/api?username=gambare2&show_icons=true&theme=github_dark"
            alt="GitHub Stats"
            className="w-full md:w-[500px]"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gambare2&layout=compact&theme=github_dark"
            alt="Top Languages"
            className="w-full md:w-[300px]"
          />
        </div>
      </div>

      

      <p className="text-center text-gray-500 text-2xl">⭐️ Thanks for visiting! ⭐️</p>
    </div>
    </div>
  )
}

export default About
