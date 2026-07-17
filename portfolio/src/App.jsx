import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { BrowserRouter as BrowseRouter, Link } from 'react-router-dom'
import NotFound from './pages/NotFound'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <BrowseRouter>
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About

        darkMode={darkMode}
        bio="Hi, I'm Smit Kumar B — a 5th Semester B.Tech Computer Engineering student at Charusat University. I'm passionate about web development and love building modern, responsive web applications using React, JavaScript, HTML, CSS, and Tailwind CSS."
      />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
    </BrowseRouter>
  )
}

export default App
