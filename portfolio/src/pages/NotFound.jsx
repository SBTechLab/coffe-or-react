import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-8xl font-bold text-pink-500">404</h1>
      <p className="text-2xl font-semibold mt-4 mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-400 transition">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
