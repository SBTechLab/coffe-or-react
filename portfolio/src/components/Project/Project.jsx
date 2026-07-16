import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Theme Changer',
    desc: 'A React app with dark/light mode toggle using Context API.',
    github: 'https://github.com/SBTechLab',
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio built with React, Tailwind CSS and Framer Motion.',
    github: 'https://github.com/SBTechLab',
  },
  {
    title: 'React Projects',
    desc: 'Collection of React mini projects built during learning.',
    github: 'https://github.com/SBTechLab',
  },
]

function Projects({ darkMode }) {
  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-3xl font-bold text-center mb-12">My <span className="text-cyan-400">Projects</span></h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className={`rounded-xl p-6 shadow-lg flex flex-col gap-4 border border-gray-700 hover:border-cyan-400 transition ${darkMode ? 'bg-gray-800' : 'bg-slate-100'}`}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.desc}</p>
            <a href={project.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mt-auto">
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
