import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-[8%] py-6 bg-fixed bg-white z-10 bg-transparent shadow-md '>
        <h1 className='text-lg font-bold'><span className='text-blue-900 text-2xl'>Cyber</span>Nix'25</h1>
        <ul className='flex gap-10'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/schedule"><li>Schedule</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar