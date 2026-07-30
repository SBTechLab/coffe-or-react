import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center shadow-md ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-xl font-bold">Smit<span className="text-cyan-400">.</span></h1>

      <ul className="hidden md:flex gap-8 font-medium">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="hover:text-cyan-400 transition">{label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode} className="text-xl hover:text-cyan-400 transition">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <ul className={`absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-6 shadow-md ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
