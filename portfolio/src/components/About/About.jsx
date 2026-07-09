import { FaGithub, FaInstagram } from 'react-icons/fa'

function About({ bio }) {
  return (
    <section className="w-full max-w-2xl mx-auto py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-600">{bio}</p>
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://github.com/SBTechLab"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition"
        >
          <FaGithub size={20} /> GitHub
        </a>
        <a
          href="https://instagram.com/smit_bhalani_18"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-400 transition"
        >
          <FaInstagram size={20} /> Instagram
        </a>
      </div>
    </section>
  )
}

export default About
