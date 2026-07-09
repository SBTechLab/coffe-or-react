function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind"]

  return (
    <section className="w-full max-w-2xl mx-auto py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-900 text-white px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
