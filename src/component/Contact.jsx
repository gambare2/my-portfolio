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
  },
  {
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=sprincearyan384@gmail.com',
    name: 'G-mail',
    logo: 'gmail.svg',
    userId: 'sprincearyan384@gmail.com'
  },
  {
    link: 'tel:+916207535637',
    name: 'Phone no.',
    logo: 'phone.png',
    userId: '6207535637'
  }
]

function Contact() {
  const openContact = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-8">
      {contactCard.map(({ link, name, logo, userId }, index) => (
        <div
          key={index}
          onClick={() => openContact(link)}
          className="bg-teal-500 hover:bg-teal-600 transition-colors duration-300 rounded-xl cursor-pointer shadow-md flex flex-col items-center p-4 md:p-6 text-white"
        >
          <img
            src={logo}
            alt={name}
            className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
          />
          <div className="text-center">
            <p className="font-semibold text-lg md:text-xl">{name}</p>
            <p className="text-sm md:text-base opacity-90">{userId}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Contact
