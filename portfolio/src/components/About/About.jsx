import { motion } from 'framer-motion'
import { FaGithub, FaInstagram } from 'react-icons/fa'

function About({ bio, darkMode }) {
  return (
    <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">About <span className="text-cyan-400">Me</span></h2>
        <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{bio}</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/SBTechLab" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition">
            <FaGithub /> GitHub
          </a>
          <a href="https://instagram.com/smit_bhalani_18" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-cyan-400 text-gray-950 font-semibold px-5 py-2 rounded-full hover:bg-cyan-300 transition">
            <FaInstagram /> Instagram
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default About
