import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'
import Projects from './pages/Project'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <About bio="Hi, I'm Smit Kumar B — a 5th Semester B.Tech Computer Engineering student at Charusat University. I'm passionate about web development and love building modern, responsive web applications using React, JavaScript, HTML, CSS, and Tailwind CSS. I enjoy turning ideas into real projects and continuously improving my skills in frontend development." />
                <Skills />
              </>
            } />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
