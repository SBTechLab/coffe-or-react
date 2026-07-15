import { useState } from 'react'

function Contact({ darkMode }) {
  const [message, setMessage] = useState('')

  return (
    <section className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <div className={`p-8 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className={`border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'}`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'}`}
          />
          <textarea
            rows={5}
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-pink-400 resize-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300'}`}
          />
          <p className={`text-sm text-right ${message.length > 200 ? 'text-red-500' : 'text-gray-400'}`}>
            {message.length} / 200
          </p>
          <button className="bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-400 transition font-medium">
            Send Message
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
