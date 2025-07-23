import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Parent from './pages/Parent'
import Child from './pages/Child'
import Admin from './pages/Admin'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}