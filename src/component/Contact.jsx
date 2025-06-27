import React from 'react'

const contactCard= [
  {
    link : 'https://www.instagram.com/thakur_aryan864/',
    name: 'Instagram',
    logo: 'instagram.svg',
    userId: 'thakur_aryan864',
  },
   {
    link : 'https://www.facebook.com/princearyan.singh.161',
    name: 'Facebook',
    logo: 'facebook.png',
    userId: 'Prince Aryan Singh',
  },
   {
    link : 'https://github.com/gambare2',
    name: 'Github',
    logo: 'github.svg',
    userId: 'gambare2',
  },
   {
    link : 'https://x.com/aryan2645?t=gNkydbsN86BgxFataQqqew&s=09',
    name: 'Twitter/X',
    logo: 'twitter.svg',
    userId: 'aryan2645',
  },
  {
    link: 'https://www.threads.com/@thakur_aryan864',
    name: 'Threads',
    logo: 'threads.svg',
    userId: 'thakur_aryan864',
  }
]

function Contact() {
  const openContact = (link)=> {
    window.open(link, '_blank');
  }
  return (
    <div className='flex flex-row flex-wrap gap-36'>
      {contactCard.map(({link, name, logo,userId}, index)=> (
        <div className='bg-teal-400 rounded-lg cursor-pointer md:px-5 md:py-3 about-shadow'
        key={index}
        onClick={()=> openContact(link)}
        >
          <img
          key={index.name}
           src={logo}
            alt={name} 
            className='size-40'/>
            <div className='flex flex-col text-center text-2xl'>
              <span className='font1 text-xl font-extralight'>{name}</span>
              <span>{userId}</span>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Contact
