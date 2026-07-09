import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 justify-between">
      <Header name="Smit" />
      <About bio="Hi, I'm Smit Kumar B — a 5th Semester B.Tech Computer Engineering student at Charusat University. 
      I'm passionate about web development and love building modern, 
      responsive web applications using React, JavaScript, HTML, CSS, and Tailwind CSS.
       I enjoy turning ideas into real projects and continuously improving my skills in frontend development." />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
