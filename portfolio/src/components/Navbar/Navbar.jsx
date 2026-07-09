import { useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-xl font-bold">Smit<span className="text-pink-500">.</span></h1>

      <ul className="hidden md:flex gap-8 font-medium">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="hover:text-pink-500 transition">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode} className="text-xl hover:text-pink-500 transition">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <ul className={`absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-6 shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
