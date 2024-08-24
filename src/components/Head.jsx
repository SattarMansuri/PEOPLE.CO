import React from 'react'
import profile from '../assets/profile.png'
import { GoBell } from "react-icons/go";

const Head = () => {
  return (
    <div className='p-6 border-b-2 border-gray-300 flex justify-between'>
    <h1 className='text-purple-700 font-bold text-4xl'>PEOPLE.CO</h1>
    <div className='flex items-center justify-center gap-2'>
    <GoBell className='text-2xl' />
    <img src={profile} className='h-12' alt="" />
    <span className='text-2xl'>Jane Doe</span>
    </div>
   </div>
  )
}

export default Head