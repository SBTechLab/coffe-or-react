function Header({ name }) {
  return (
    <header className="w-full bg-gray-900 text-white py-6 text-center">
      <h1 className="text-4xl font-bold">{name}'s Portfolio</h1>
    </header>
  )
}

export default Header
