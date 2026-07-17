import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Hero({ darkMode }) {
  const roles = ['Web Developer', 'React Developer', 'B.Tech CE Student']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className={`min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 ${darkMode ? 'bg-gray-950 text-white' : 'bg-slate-100 text-gray-900'}`}>
      <motion.h1
        initial={{ opacity: 0,y : -40}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0}}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm <span className="text-cyan-400">Smit Kumar B</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5}}
        className="text-2xl font-medium mb-8"
      >
        I am a <span className="text-cyan-400">{roles[index]}</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.0}}
        className="flex gap-4"
      >
        <a href="#projects" className="bg-cyan-400 text-gray-950 font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition">
          View Projects
        </a>
        <a href="#contact" className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-gray-950 transition font-semibold">
          Contact Me
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
