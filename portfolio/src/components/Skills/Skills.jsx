import { motion } from 'framer-motion'

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'GitHub', 'Vite']

function Skills({ darkMode }) {
  return (
    <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-slate-100 text-gray-900'}`}>
      <h2 className="text-3xl font-bold text-center mb-12">My <span className="text-cyan-400">Skills</span></h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className={`px-5 py-2 rounded-full font-medium text-sm border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950 transition cursor-default`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default Skills
