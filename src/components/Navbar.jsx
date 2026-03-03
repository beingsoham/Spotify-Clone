import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img 
            onClick={() => navigate(-1)} 
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer' 
            src={assets.arrow_left} 
            alt="" 
          />
          <img 
            onClick={() => navigate(1)} 
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer' 
            src={assets.arrow_right} 
            alt="" 
          />
        </div>

        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-3 rounded-full hidden md:block hover:bg-gray-200 cursor-pointer'>
            Explore Premium
          </p>

          <p className='bg-black text-white px-4 py-3 rounded-full hidden md:block hover:bg-gray-900 cursor-pointer'>
            Install App
          </p>

          <p className='bg-purple-600 text-white text-[19px] w-12 h-11 rounded-full flex items-center justify-center cursor-pointer'>
            S
          </p>
        </div>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <p className='bg-green-500 text-black font-semibold px-6 py-2 rounded-full cursor-pointer'>
          All
        </p>

        <p className='bg-[#232323] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#2a2a2a] cursor-pointer'>
          Podcasts
        </p>

        <p className='bg-[#232323] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#2a2a2a] cursor-pointer'>
          Music
        </p>

        <p className='bg-[#232323] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#2a2a2a] cursor-pointer'>
          Live
        </p>
      </div>
    </>
  )
}

export default Navbar