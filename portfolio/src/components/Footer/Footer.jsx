function Footer({ darkMode }) {
  return (
    <footer className={`w-full py-6 text-center border-t border-gray-800 ${darkMode ? 'bg-gray-950 text-gray-400' : 'bg-white text-gray-600'}`}>
      <p>© 2024 <span className="text-cyan-400 font-semibold">Smit Kumar B</span> — All Rights Reserved</p>
    </footer>
  )
}

export default Footer
