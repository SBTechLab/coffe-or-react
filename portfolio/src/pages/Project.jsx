import { useEffect, useState } from 'react'
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa'
import Spinner from '../components/Spinner/Spinner'
import ErrorMsg from '../components/ErrorMsg/ErrorMsg'

function Projects({ darkMode }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/SBTechLab/repos')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repositories')
        return res.json()
      })
      .then((data) => {
        setRepos(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <Spinner />
  if (error) return <ErrorMsg message={error} />

  return (
    <section className={`min-h-screen py-16 px-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-slate-100 text-gray-900'}`}>
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-2">
          My <span className="text-cyan-400">Repositories</span>
        </h2>
        <p className={`text-center mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Live from GitHub — {repos.length} repositories
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((repo, i) => {
            const colors = [
              'from-cyan-500 to-blue-500',
              'from-purple-500 to-pink-500',
              'from-orange-400 to-red-500',
              'from-green-400 to-teal-500',
              'from-yellow-400 to-orange-500',
              'from-pink-500 to-rose-500',
            ]
            const gradient = colors[i % colors.length]

            return (
              <div
                key={repo.id}
                className={`rounded-2xl shadow-lg flex flex-col overflow-hidden border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
              >
                {/* colored top bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${gradient}`} />

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-cyan-400 text-xl" />
                    <h3 className="text-base font-bold truncate">{repo.name}</h3>
                  </div>

                  <p className={`text-sm flex-1 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {repo.description || 'No description provided'}
                  </p>

                  <div className={`flex items-center gap-4 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1"><FaStar className="text-yellow-400" /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><FaCodeBranch className="text-cyan-400" /> {repo.forks_count}</span>
                    {repo.language && (
                      <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${gradient} text-white`}>
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-1 text-sm font-semibold px-4 py-2 rounded-full text-center text-white bg-gradient-to-r ${gradient} hover:opacity-90 transition`}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
