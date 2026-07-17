# Portfolio Project — Full Explanation

---

## Project Structure

```
src/
├── main.jsx                          ← entry point, renders App into HTML
├── index.css                         ← global styles (Tailwind)
├── App.jsx                           ← root component, holds darkMode state + routing
├── components/
│   ├── Navbar/Navbar.jsx             ← fixed navbar, dark toggle, mobile menu
│   ├── Hero/Hero.jsx                 ← animated intro section
│   ├── About/About.jsx               ← bio + social links
│   ├── Skills/Skills.jsx             ← animated skill badges
│   ├── Project/Projects.jsx          ← project cards
│   ├── Contact/Contact.jsx           ← contact form (used in home page)
│   └── Footer/Footer.jsx             ← footer
└── pages/
    ├── Project.jsx                   ← Projects page (used in /projects route)
    ├── Contact.jsx                   ← Contact page with controlled input (used in /contact route)
    └── NotFound.jsx                  ← 404 page (used in * route)
```

---

## How Everything Connects

```
main.jsx
  └── renders App.jsx
        ├── BrowserRouter (enables routing)
        ├── Navbar (always visible, gets darkMode + toggleDarkMode from App)
        ├── Routes
        │     ├── path="/"         → Hero + About + Skills
        │     ├── path="/projects" → pages/Project.jsx
        │     ├── path="/contact"  → pages/Contact.jsx
        │     └── path="*"        → pages/NotFound.jsx
        └── Footer (always visible)
```

---

## File 1 — main.jsx (Entry Point)

```jsx
import { StrictMode } from 'react'
// StrictMode helps catch bugs during development only

import { createRoot } from 'react-dom/client'
// createRoot connects React to the HTML file (index.html)

import './index.css'
// loads Tailwind CSS globally for the whole app

import App from './App.jsx'
// imports your root App component

createRoot(document.getElementById('root'))
// finds <div id="root"> inside index.html

.render(
  <StrictMode>
    <App />
    // renders your entire app inside that div
  </StrictMode>
)
```

### What to change: NOTHING — this file never needs to be touched.

---

## File 2 — index.css (Global Styles)

```css
@import "tailwindcss";
// loads all Tailwind utility classes like bg-gray-900, text-white, flex, grid etc
// this one line replaces hundreds of lines of manual CSS
```

### What to change: NOTHING.

---

## File 3 — App.jsx (THE BRAIN — Most Important File)

This file does 3 things:
1. Holds darkMode state and passes it to every component
2. Wraps everything in BrowserRouter to enable routing
3. Uses Routes to decide which page to show based on URL

```jsx
import { useState } from 'react'
// useState lets us store and update values inside a component

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// BrowserRouter — enables URL-based routing, wrap your whole app in this
// Routes     — container that holds all your Route definitions
// Route      — defines one path and what component to show for that path

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Project/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NotFound from './pages/NotFound'
// importing all components and pages so we can use them in Routes

function App() {

  const [darkMode, setDarkMode] = useState(true)
  // darkMode = current value (true = dark theme, false = light theme)
  // setDarkMode = function to update it
  // useState(true) = app starts in dark mode by default

  const toggleDarkMode = () => setDarkMode((prev) => !prev)
  // when called, flips darkMode: true→false or false→true
  // prev is the current value before change
  // this function is passed DOWN to Navbar as a prop

  return (
    <BrowserRouter>
    {/* BrowserRouter must wrap everything — it reads the URL
        and tells Routes which component to show */}

      <div className={darkMode ? 'dark' : ''}>
      {/* adds 'dark' class to root div when darkMode is true
          Tailwind uses this class to apply dark: variant styles */}

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* Navbar is OUTSIDE Routes so it shows on every page
            darkMode prop → Navbar changes its own background color
            toggleDarkMode prop → Navbar's sun/moon button calls this to flip theme */}

        <Routes>
        {/* Routes looks at current URL and renders matching Route only */}

          <Route path="/" element={
            <>
              <Hero darkMode={darkMode} />
              <About darkMode={darkMode} bio="Hi, I'm Smit Kumar B — a 5th Semester B.Tech Computer Engineering student at Charusat University. I'm passionate about web development and love building modern, responsive web applications using React, JavaScript, HTML, CSS, and Tailwind CSS." />
              <Skills darkMode={darkMode} />
            </>
          } />
          {/* path="/" = home page URL
              element = what to render — here we show Hero + About + Skills together
              <> </> is a Fragment — groups multiple components without adding extra HTML */}

          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          {/* when URL is /projects, show Projects component
              passes darkMode so Projects can apply correct colors */}

          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          {/* when URL is /contact, show Contact page component */}

          <Route path="*" element={<NotFound />} />
          {/* path="*" = catches ALL unknown URLs like /xyz /abc etc
              shows 404 Not Found page */}

        </Routes>

        <Footer darkMode={darkMode} />
        {/* Footer is OUTSIDE Routes so it shows on every page */}

      </div>
    </BrowserRouter>
  )
}

export default App
// makes App available to main.jsx to render
```

### What to change:
- Make sure imports are: `{ BrowserRouter, Routes, Route }` from react-router-dom
- Do NOT import `Link` here — Link is only needed in Navbar
- Wrap components in `<Routes>` with `<Route>` for each path

---

## File 4 — Navbar.jsx (Navigation Bar)

This file does 3 things:
1. Shows navigation links using React Router Link
2. Has dark/light mode toggle button
3. Has mobile hamburger menu

```jsx
import { useState } from 'react'
// useState for menuOpen — tracks if mobile menu is open or closed

import { Link } from 'react-router-dom'
// Link = React Router's version of <a> tag
// difference: <a href> causes full page reload, <Link to> does NOT
// this is what makes it a Single Page Application (SPA)

import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
// FaMoon  = moon icon (shown in light mode to switch to dark)
// FaSun   = sun icon (shown in dark mode to switch to light)
// FaBars  = hamburger icon (3 lines, shown when mobile menu is closed)
// FaTimes = X icon (shown when mobile menu is open)

function Navbar({ darkMode, toggleDarkMode }) {
// props received FROM App.jsx:
// darkMode       = current theme value (true/false)
// toggleDarkMode = function to flip the theme

  const [menuOpen, setMenuOpen] = useState(false)
  // menuOpen = is mobile menu currently open?
  // starts as false (closed)
  // this is useState variable #1 — used for UI toggle (assignment requirement)

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ]
  // array of objects — each has label (display text) and to (URL path)
  // we use objects instead of plain strings so we can have different label and URL

  return (
    <nav className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center shadow-md
      ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
    {/* fixed     = stays at top of screen when you scroll
        w-full    = full width
        z-50      = always appears on top of other elements
        justify-between = logo on left, links in middle, buttons on right
        darkMode controls background and text color */}

      <h1 className="text-xl font-bold">Smit<span className="text-cyan-400">.</span></h1>
      {/* brand/logo name — the dot is cyan colored */}

      <ul className="hidden md:flex gap-8 font-medium">
      {/* hidden    = not visible on mobile screens
          md:flex   = shows as flex row on medium (768px+) screens
          gap-8     = space between links */}
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="hover:text-cyan-400 transition">
              {label}
            </Link>
            {/* Link to={to} — navigates to that route WITHOUT page reload
                hover:text-cyan-400 — turns cyan on hover */}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button onClick={toggleDarkMode} className="text-xl hover:text-cyan-400 transition">
          {darkMode ? <FaSun /> : <FaMoon />}
          {/* if dark mode → show Sun (click to go light)
              if light mode → show Moon (click to go dark)
              onClick calls toggleDarkMode from App.jsx which flips the state */}
        </button>

        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
          {/* md:hidden = only shows on mobile screens
              toggles menuOpen state between true and false
              if open → show X icon, if closed → show hamburger icon */}
        </button>
      </div>

      {menuOpen && (
      // only renders this block when menuOpen is true
        <ul className={`absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-6 shadow-md
          ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
        {/* absolute top-16 = appears just below the navbar
            w-full = full width dropdown */}
          {links.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">
                {label}
              </Link>
              {/* onClick closes the mobile menu after clicking a link */}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
// makes Navbar available to App.jsx
```

### What to change:
- Make sure `links` is an array of objects `{ label, to }` not plain strings
- Make sure desktop ul uses `<Link to={to}>` not `<a href>`
- Make sure mobile ul also uses `<Link to={to}>` not `<a href>`

---

## File 5 — Hero.jsx (Hero Section)

```jsx
import { useEffect, useState } from 'react'
// useEffect = runs code after component renders (like setInterval)
// useState  = stores current role index

import { motion } from 'framer-motion'
// motion.h1, motion.p etc — gives animation to HTML elements

function Hero({ darkMode }) {
// receives darkMode from App.jsx to control background color

  const roles = ['Web Developer', 'React Developer', 'B.Tech CE Student']
  // array of roles to cycle through

  const [index, setIndex] = useState(0)
  // index = which role to show currently (0, 1, 2)
  // starts at 0 = 'Web Developer'

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
      // every 2000ms (2 seconds), increase index by 1
      // % roles.length = wraps back to 0 after index reaches 2
      // so it loops: 0 → 1 → 2 → 0 → 1 → 2 ...
    }, 2000)

    return () => clearInterval(interval)
    // cleanup function — stops the interval when Hero unmounts
    // prevents memory leaks

  }, [])
  // [] = empty dependency array = run this effect only ONCE when component first loads

  return (
    <section id="home" className={`min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20
      ${darkMode ? 'bg-gray-950 text-white' : 'bg-slate-100 text-gray-900'}`}>
    {/* min-h-screen = takes full viewport height
        flex flex-col justify-center items-center = centers content vertically and horizontally
        pt-20 = padding top to avoid content hiding behind fixed Navbar */}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
      {/* initial = starting state: invisible, 40px above normal position
          animate = end state: fully visible, normal position
          transition duration = 1 second animation */}
        Hi, I'm <span className="text-cyan-400">Smit Kumar B</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
      {/* delay: 0.5 = waits 0.5 seconds before starting animation
          so heading animates first, then this fades in */}
        I am a <span className="text-cyan-400">{roles[index]}</span>
        {/* roles[index] shows current role — changes every 2 seconds */}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.0 }}
      >
      {/* animates in after 1 second — last thing to appear */}
        <a href="#projects">View Projects</a>
        {/* scrolls to projects section on home page */}
        <a href="#contact">Contact Me</a>
        {/* scrolls to contact section on home page */}
      </motion.div>
    </section>
  )
}

export default Hero
```

### What to change: NOTHING.

---

## File 6 — About.jsx

```jsx
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram } from 'react-icons/fa'

function About({ bio, darkMode }) {
// bio = text string passed from App.jsx
// darkMode = theme value from App.jsx

  return (
    <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      {/* whileInView = animation triggers when this section scrolls into the viewport
          not on page load — only when user scrolls to it */}

        <h2>About <span className="text-cyan-400">Me</span></h2>

        <p>{bio}</p>
        {/* bio text comes from App.jsx:
            bio="Hi, I'm Smit Kumar B..." passed as prop */}

        <a href="https://github.com/SBTechLab" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        {/* target="_blank" = opens in new tab
            rel="noreferrer" = security best practice for external links */}

        <a href="https://instagram.com/smit_bhalani_18" target="_blank" rel="noreferrer">
          <FaInstagram /> Instagram
        </a>
      </motion.div>
    </section>
  )
}

export default About
```

### What to change: NOTHING.

---

## File 7 — Skills.jsx

```jsx
import { motion } from 'framer-motion'

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'GitHub', 'Vite']
// defined OUTSIDE the component
// reason: if inside, React would recreate this array on every render — wasteful

function Skills({ darkMode }) {
  return (
    <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-slate-100 text-gray-900'}`}>

      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
      {/* flex-wrap = badges wrap to next line if screen is small
          justify-center = centered horizontally */}

        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
          {/* i = index (0,1,2,3...)
              delay: i * 0.1 = each badge animates 0.1s after the previous one
              so they appear one by one instead of all at once */}
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default Skills
```

### What to change: NOTHING.

---

## File 8 — components/Project/Projects.jsx

```jsx
function Projects({ darkMode }) {
// receives darkMode from App.jsx to control card background color

  const projects = [
    { title: 'Password Generator', desc: 'Generate strong passwords with React hooks', tech: 'React, Tailwind' },
    { title: 'Todo App', desc: 'Todo app with context API and localStorage', tech: 'React, Context API' },
    { title: 'Theme Changer', desc: 'Dark/light mode toggle using context', tech: 'React, Tailwind' },
  ]
  // array of project objects — each has title, description, and tech stack

  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {/* grid = CSS grid layout
          md:grid-cols-3 = 3 columns on medium+ screens, 1 column on mobile
          gap-6 = space between cards */}

        {projects.map((p) => (
          <div key={p.title} className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          {/* key={p.title} = React needs unique key for each list item
              rounded-xl = rounded corners, shadow-md = card shadow */}
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full">{p.tech}</span>
            {/* tech badge with pink background */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
```

### What to change: NOTHING.

---

## File 9 — components/Contact/Contact.jsx

```jsx
import { motion } from 'framer-motion'

function Contact({ darkMode }) {
// this is the contact section used on the HOME page (not the /contact route)

  return (
    <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-slate-100 text-gray-900'}`}>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      {/* form animates in when scrolled into view */}

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="5" placeholder="Your Message" />
        {/* these inputs are UNCONTROLLED — no value or onChange
            they work but React doesn't track their values
            this is fine for the home page section */}

        <button type="submit">Send Message</button>
      </motion.form>
    </section>
  )
}

export default Contact
```

### What to change: NOTHING.

---

## File 10 — pages/Contact.jsx (THE CONTROLLED FORM — Assignment Requirement)

This is the Contact PAGE used in the `/contact` route. This is different from components/Contact/Contact.jsx.
This one has a CONTROLLED input with useState — which is the assignment requirement.

```jsx
import { useState } from 'react'
// useState needed for controlled input

function Contact({ darkMode }) {
// receives darkMode from App.jsx via the Route element prop

  const [message, setMessage] = useState('')
  // message = current text typed in the textarea
  // setMessage = updates message on every keystroke
  // useState('') = starts as empty string
  // this is useState variable #2 — for form input (assignment requirement)

  return (
    <section className="max-w-xl mx-auto py-16 px-4">

      <div className={`p-8 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex flex-col gap-4">

          <input type="text" placeholder="Your Name" />
          {/* uncontrolled — ok for name field */}

          <input type="email" placeholder="Your Email" />
          {/* uncontrolled — ok for email field */}

          <textarea
            rows={5}
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {/* CONTROLLED INPUT:
              value={message}  = textarea always shows what's in state
              onChange         = every keystroke calls setMessage with new value
              e.target.value   = the current text in the textarea
              this makes React fully control this input — assignment requirement */}

          <p className={`text-sm text-right ${message.length > 200 ? 'text-red-500' : 'text-gray-400'}`}>
            {message.length} / 200
          </p>
          {/* LIVE CHARACTER COUNT:
              message.length = number of characters typed (updates in real time)
              if over 200 → text turns red as warning
              this works because message state updates on every keystroke */}

          <button className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-400 transition font-medium">
            Send Message
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
```

### What to change: NOTHING. This file is complete and correct.

---

## File 11 — pages/NotFound.jsx (404 Page)

```jsx
import { Link } from 'react-router-dom'
// Link needed to go back to home without page reload

function NotFound() {
// no props needed — this page is standalone

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
    {/* min-h-[60vh] = takes at least 60% of screen height
        items-center + justify-center = centers everything */}

      <h1 className="text-8xl font-bold text-pink-500">404</h1>
      {/* huge 404 number in pink */}

      <p className="text-2xl font-semibold mt-4 mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>

      <Link to="/" className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-400 transition">
        Go Home
      </Link>
      {/* Link to="/" navigates back to home route without page reload
          this is why we use Link instead of <a href="/"> */}
    </div>
  )
}

export default NotFound
```

### What to change: NOTHING. This file is complete and correct.

---

## File 12 — Footer.jsx

```jsx
function Footer({ darkMode }) {
// receives darkMode to switch between dark and light styles

  return (
    <footer className={`w-full py-6 text-center border-t border-gray-800
      ${darkMode ? 'bg-gray-950 text-gray-400' : 'bg-white text-gray-600'}`}>
    {/* border-t = top border line separating footer from content
        darkMode controls background and text color */}

      <p>© 2024 <span className="text-cyan-400 font-semibold">SB18</span> — All Rights Reserved</p>
    </footer>
  )
}

export default Footer
```

### What to change: NOTHING.

---

## Summary — Files That Need Changes

| File | Status | What to Change |
|------|--------|----------------|
| main.jsx | ✅ Done | Nothing |
| index.css | ✅ Done | Nothing |
| App.jsx | ⚠️ Change needed | Add Routes + Route, fix BrowserRouter import |
| Navbar.jsx | ⚠️ Change needed | Change links array to objects, use Link to= for both desktop and mobile |
| Hero.jsx | ✅ Done | Nothing |
| About.jsx | ✅ Done | Nothing |
| Skills.jsx | ✅ Done | Nothing |
| components/Project/Projects.jsx | ✅ Done | Nothing |
| components/Contact/Contact.jsx | ✅ Done | Nothing |
| Footer.jsx | ✅ Done | Nothing |
| pages/Contact.jsx | ✅ Done | Nothing |
| pages/NotFound.jsx | ✅ Done | Nothing |

---

## Assignment Requirements Checklist

| Requirement | Where it is | Status |
|-------------|-------------|--------|
| Wrap App in BrowserRouter | App.jsx | ✅ |
| Navbar with links to 3 routes | Navbar.jsx | ✅ |
| Route "/" → Home | App.jsx Route path="/" | ✅ |
| Route "/projects" → Projects | App.jsx Route path="/projects" | ✅ |
| Route "/contact" → Contact | App.jsx Route path="/contact" | ✅ |
| useState for UI toggle | Navbar.jsx — menuOpen | ✅ |
| useState for form input | pages/Contact.jsx — message | ✅ |
| Controlled input with live display | pages/Contact.jsx — textarea | ✅ |
| 404 Not Found route | App.jsx Route path="*" | ✅ |
| Dark/light mode toggle | App.jsx + Navbar.jsx | ✅ |
| Live character count | pages/Contact.jsx | ✅ |
