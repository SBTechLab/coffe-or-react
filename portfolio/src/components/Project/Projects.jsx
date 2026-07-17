function Projects({ darkMode }) {
  const projects = [
    { title: 'Password Generator', desc: 'Generate strong passwords with React hooks', tech: 'React, Tailwind' },
    { title: 'Todo App', desc: 'Todo app with context API and localStorage', tech: 'React, Context API' },
    { title: 'Theme Changer', desc: 'Dark/light mode toggle using context', tech: 'React, Tailwind' },
  ]

  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-3xl font-bold text-center mb-10">My <span className="text-pink-500">Projects</span></h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{p.desc}</p>
            <span className="text-xs bg-pink-500 text-white px-3 py-1 rounded-full">{p.tech}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
