import { PiSquaresFourFill } from "react-icons/pi";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { MdCheckBoxOutlineBlank, MdArrowOutward } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import Head from '../components/Head'
import { useLocation, useNavigate } from "react-router-dom";
import { FAKE_DATA } from "./utils";
import { useState } from "react";

const Details = () => {
  const state = useLocation()
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const [currPage, setCurrPage] = useState(1)
  const recordsPpage = 7;
  const lastIndex = currPage * recordsPpage
  const firstIndex = lastIndex - recordsPpage
  const records = FAKE_DATA.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(FAKE_DATA.length / recordsPpage)
  const numbers = [...Array(nPage +1).keys()].slice(1)

  const nextPage = ()=>{
   if(currPage !== nPage){
    setCurrPage(currPage + 1)
   }
  }
  const prePage = () =>{
  if(currPage !== 1){
    setCurrPage(currPage - 1)
  }
  }

  const changeCPage = (id)=>{
 setCurrPage(id)
  }
  return (
    <>
    <Head/>
    <div className='p-6 flex min-h-[39rem]'>
    <div>
    <div onClick={()=>navigate('/')} className='w-[18rem] cursor-pointer'>
    <PiSquaresFourFill className='relative top-8 text-3xl bg-black text-white rounded-md' /> <span className='text-2xl ml-10 font-semibold'>Overview</span>
    </div>
    <div className='cursor-pointer'>
    <PiSquaresFourFill className='relative top-8 text-3xl bg-purple-700 text-white rounded-md' /> <span className='text-2xl ml-10 font-semibold text-purple-700'>People Directory</span>
    </div>
    </div>
    <div className='border-2 rounded-lg border-gray-300 min-h-full w-[75rem] flex'>
      <div className="w-[30rem]">
        <div className="border-b-2 border-gray-300 p-4 h-12 flex items-center">
          <h2 className="font-bold text-xl">Team Members</h2>
          <span className='p-1 ml-3 border-2 border-gray-300 bg-purple-100 font-semibold text-purple-700 rounded-2xl'>100 users</span>
        </div>
        <div className="border-b-2 border-gray-300 p-4 h-8 flex items-center text-gray-400">
        <MdCheckBoxOutlineBlank />
         <span className="ml-4">Name</span> 
         <HiOutlineChevronUpDown className="text-xl" />
         <span className='ml-[15rem]'>Status</span>
        <FaArrowDown className='ml-2' />
        </div>
        {records.map((element)=>(
          <div className="border-b-2 border-gray-300 p-4 h-16 flex items-center">
          <MdCheckBoxOutlineBlank className=" text-gray-400" />
          <img className='h-10 w-10 ml-5 rounded-full cursor-pointer' onClick={()=>setData(element)} src={element.avatar} alt="" /> 
          <div className="w-44 ml-4">
        <span className='font-semibold pl-4'>{element.name}</span> <div className='ml-5 mt-0'>{element.userName}</div>
        </div>
        <span className='text-md ml-16 pl-3 border-2 border-gray-300 mb-2 rounded-xl pr-4'><span className='text-green-500 '>&#9679;</span> Active</span>
          </div>
        ))}
         <div className='flex justify-between mt-4'>
        <button onClick={prePage} className='ml-4 border-2 h-8 w-32 mt-[2px] text-lg font-semibold rounded-lg'>
            <a href='#'>&#8592; Previous </a>
            </button>
            <div>
            { 
              numbers.map((n, i)=>(
                  <button href="#" key={i} className={`${currPage === n ? 'active' : ''} h-8 mt-[2px] w-10 font-semibold text-lg`} onClick={()=>changeCPage(n)}>{n}</button>
              ))
            }
             </div>
            <button  onClick={nextPage} className='mr-4 border-2 h-8 w-32 mt-[2px] text-lg font-semibold rounded-lg'>
            <a href='#'> Next &#8594;</a>
            </button>
      </div>
      </div>
      <div className="w-[45rem] border-l-2 rounded-lg border-gray-300">
      <div className="h-28 bg-[#2A5B7E] rounded-t-lg p-4 flex" >
       <img src={data.avatar || state?.state?.element?.avatar} className="h-20 w-20 rounded-full"/> 
       <div className="text-white ml-10">
       <h2>{data.name || state?.state?.element?.name}</h2>
       <span>{data.userName || state?.state?.element?.userName} | {data.jobTitle || state?.state?.element?.jobTitle}</span><br />
       <span>UserID | Role</span>
       </div>
       <span onClick={()=>navigate('/people')} className="relative left-[28rem] bottom-2 cursor-pointer text-white">X</span>
      </div>
      <div className="p-2 font-medium">
        <div className="bg-blue-50 p-2 rounded-md mb-2"><h2>Personal Information</h2>
        </div>
        <div className="border-t-[1px] border-gray-300 pt-4 pb-1 text-sm">
          <span>Date of Birth</span> <span className="ml-32 text-gray-400 font-normal">{data.birthdate || state?.state?.element?.birthdate}</span>
      </div>
      <div className="border-t-[1px] border-gray-300 pt-4 pb-1 text-sm">
          <span>Gender</span> <span className="ml-[10.2rem] text-gray-400 font-normal">{data.gender || state?.state?.element?.gender}</span>
      </div>
      <div className="border-t-[1px] border-gray-300 pt-4 pb-1 text-sm">
          <span>Nationality</span> <span className="ml-[8.7rem] text-gray-400 font-normal">{data.nationality || state?.state?.element?.nationality}</span>
      </div>
      <div className="border-t-[1px] border-gray-300 pt-4 pb-1 text-sm">
          <span>Contact no.</span> <span className="ml-[8.5rem] text-gray-400 font-normal">{data.contact || state?.state?.element?.contact}</span>
      </div>
      <div className="border-t-[1px] border-gray-300 pt-4 pb-1 text-sm">
          <span>E-mail Address</span> <span className="ml-28 text-gray-400 font-normal">{data.email || state?.state?.element?.email}</span>
      </div>
      <div className="border-t-[1px] border-b-[1px] border-gray-300 pt-4 pb-1 text-sm">
          <span>Work email Address</span> <span className="ml-20 text-gray-400 font-normal">{data.email || state?.state?.element?.email}</span>
      </div>
      <div className="bg-blue-50 p-2 mt-2 rounded-md mb-2"><h2>Research & Publication</h2>
        </div>
        <div>AI and User Experience: The Future of Design</div>
        <div className="text-gray-300 font-light">Published in the Journal of Modern Design • 2022</div>
        <p className="text-md font-normal">AI, IoT based real time condition monitoring of Electrical Machines using Python language Abstract: Maintaining induction motors in good working order before they fail benefits <span className="text-red-500">See More...</span></p>
        <div className="flex text-xl text-red-500"> <MdArrowOutward className="relative top-1 mr-2" /> SEE PUBLICATION</div>
      </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default Details