import React from 'react';

const project = [
  {
    name: 'note-saver',
    description:
      'A note-taking app built with React and react-router. You can save delete and edit your notes.',
    image: 'add.png',
    link: 'https://github.com/gambare2/notes-manager',
    tech: ['React, ', 'React Router, ', 'Tailwind CSS'],
    date: '22-05-2025',
    category: 'Web Development',
    isFeatured: true,
    isNew: true,
  },
  {
    name: 'Login Page',
    description:
      'A Register page built to show case my skills in frontend and backend. You can login via email or google account by using firebase authentication.',
    image: 'add.png',
    link: 'https://github.com/gambare2/fullstack-login',
    tech: ['React, ', 'Tailwind CSS, ', 'Node.js, ', 'Express, ', 'MongoDB'],
    date: '29-05-2025',
    category: 'Web Development',
    isFeatured: true,
    isNew: true,
  },
  {
    name: 'Register Page',
    description:
      'A Register page built to show case my skills in frontend and backend. You can register via email or google account.',
    image: 'add.png',
    link: 'https://github.com/gambare2/fullstack-register',
    tech: [
      'React, ',
      'Tailwind CSS, ',
      'Node.js, ',
      'Express, ',
      'MongoDB, ',
      'firebase',
    ],
    date: '01-06-2025',
    category: 'Web Development',
    isFeatured: true,
    isNew: true,
  },
];

function Project() {
  return (
    <div className="px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-slate-400 font1 border-b-2 border-slate-400 w-fit px-4 mx-auto mb-10">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {project.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border-2 border-slate-400 rounded-md p-4 shadow-md hover:shadow-lg transition-all duration-300 about-shadow"
          >
            <img src={project.image} alt={project.name} className="w-16 h-16 mx-auto" />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font1 text-xl sm:text-2xl">{project.name}</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-600 active:text-teal-700 underline text-sm"
                >
                  Link
                </a>
              </div>

              <p className="text-cyan-700 text-sm sm:text-base font-light">
                {project.description}
              </p>

              <div className="flex justify-between items-center flex-wrap text-sm text-gray-600">
                <div className="flex items-start gap-2 flex-wrap">
                  <img src="tech.svg" alt="tech" className="w-4 h-4 mt-1" />
                  <span>{project.tech}</span>
                </div>
                <span className="whitespace-nowrap">📅 {project.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

