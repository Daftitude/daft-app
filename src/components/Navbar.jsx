import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Parent', path: '/parent' },
  { name: 'Child', path: '/child' },
  { name: 'Admin', path: '/admin' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold text-white">🚀 DaFT</h1>
      <ul className="flex gap-6 text-white">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`hover:text-yellow-400 transition ${
                pathname === item.path ? 'text-yellow-400 font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}