import { motion } from 'framer-motion'

function Contact({ darkMode }) {
  return (
    <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-slate-100 text-gray-900'}`}>
      <h2 className="text-3xl font-bold text-center mb-12">Contact <span className="text-cyan-400">Me</span></h2>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className={`w-full px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-cyan-400 transition ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={`w-full px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-cyan-400 transition ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className={`w-full px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-cyan-400 transition ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        />
        <button type="submit" className="bg-cyan-400 text-gray-950 font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition">
          Send Message
        </button>
      </motion.form>
    </section>
  )
}

export default Contact
