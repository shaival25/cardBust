import React from 'react'
import { BrainIcon, CircleUser } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <header className='bg-black shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center space-x-2'>
              <BrainIcon className='w-8 h-8 text-green-600' />
              <h1 className='text-2xl font-bold text-white'>Card Bust</h1>
            </Link>
          </div>
          <nav className='flex items-center space-x-6'>
            <button className='text-white hover:text-blue-600'>
              <CircleUser className='w-6 h-6' />
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
