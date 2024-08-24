import React from 'react'
import { PiSquaresFourFill } from "react-icons/pi";
import Head from '../components/Head'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()
  return (
   <>
   <Head/>
   <div className='p-6 flex min-h-[39rem]'>
    <div>
    <div onClick={()=>navigate('/')} className='w-[18rem] cursor-pointer'>
    <PiSquaresFourFill className='relative top-8 text-3xl bg-purple-700 text-white rounded-md' /> <span className='text-2xl ml-10 font-semibold text-purple-700'>Overview</span>
    </div>
    <div onClick={()=>navigate('/people')} className='cursor-pointer'>
    <PiSquaresFourFill className='relative top-8 text-3xl bg-black text-white rounded-md' /> <span className='text-2xl ml-10 font-semibold'>People Directory</span>
    </div>
    </div>
    <div className='border-2 rounded-lg border-gray-300 min-h-full w-[75rem] p-4'>
      <h1 className='text-5xl font-semibold'>Welcome, Jane Doe!</h1>
    </div>
   </div>
   </>
  )
}

export default Home