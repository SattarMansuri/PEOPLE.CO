import Head from '../components/Head'
import { PiSquaresFourFill } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPen } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp, IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import refresh from '../assets/refresh.svg'
import { useState } from 'react';
import {FAKE_DATA} from './utils'

const People = () => {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [roles, setRoles] = useState(false)
  const [teams, setTeams] = useState(false)
  const [pd, setPd] = useState(false)
  const [pm, setPm] = useState(false)
  const [fd, setFd] = useState(false)
  const [bd, setBd] = useState(false)
  const [design, setDesign] = useState(false)
  const [product, setProduct] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [tech, setTech] = useState(false)
  const [data, setData] = useState({})
  
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

 function filterBox(){
setFilterOpen(true)
 }
 function deletebox(){
  setDeleteOpen(true)
 }
  function closeModal() {
    setIsOpen(false);
    setDeleteOpen(false)
    setFilterOpen(false)
  }

   return (
    <>
    <Head/>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='h-[29rem] w-[35rem] fixed inset-0 m-auto p-3 shadow-lg rounded-lg bg-white'
      >
      <h2 className='font-bold mb-8'>Edit Profile</h2>
      <div className='flex justify-center'>
        <img className='h-16 w-16' src={data.avatar} alt="" />
      </div>
      <div className='flex justify-center mt-3'>
       <button className='h-8 w-40 bg-gray-100 border-2 border-gray-400 rounded-md mr-4 pl-4'>CHANGE PHOTO</button>
       <img className='relative -left-[10.7rem]' src={refresh} alt="" /> 
       <button className='h-8 w-40 bg-gray-100 border-2 border-gray-400 rounded-md pl-4'>REMOVE PHOTO</button>
       <RiDeleteBin6Line className='relative -left-[9.8rem] top-2'/> 
      </div>
      <div className='flex justify-center mt-3'>
        <div>
          <label className='font-bold'>Name</label><br />
          <input defaultValue={data.name} className='w-64 h-8 mr-4 border-[1px] border-gray-300 rounded-sm pl-2' type="text" name="" id="" />
        </div>
        <div>
          <label className='font-bold'>Email</label><br />
          <input defaultValue={data.email} className='w-64 h-8 border-[1px] border-gray-300 rounded-sm pl-2' type="email" />
        </div>
      </div>
      <div className='flex justify-center mt-3'>
        <div>
          <label className='font-bold'>Role</label><br />
          <input defaultValue={data.jobTitle} className='w-64 h-8 border-[1px] border-gray-300 rounded-sm pl-2' type="text" />
        </div>
        <div>
          <label className='font-bold'>Status</label><br />
          <select className='w-64 h-8 ml-4 border-[1px] border-gray-300 rounded-sm pl-2' name="" id="">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className='mt-3'>
         <label>Teams</label><br />
         <input className='w-[33.2rem] h-8 mr-4 border-[1px] border-gray-300 rounded-sm pl-2' type="text" />
        </div>
        <div className='mt-5 flex justify-end'>
         <button onClick={()=>setIsOpen(false)} className='h-12 w-32 border-2 border-gray-400 rounded-md text-2xl font-bold mr-4'>CANCEL</button> <button onClick={()=>setIsOpen(false)} className='h-12 w-32 border-2 border-gray-400 rounded-md text-2xl font-bold'>SAVE</button>
        </div>
      </Modal>
      <Modal
        isOpen={deleteOpen}
        onRequestClose={closeModal}
        className='h-36 w-[35rem] fixed inset-0 m-auto p-3 shadow-lg rounded-lg bg-white'
      >
        <h2 className='font-bold text-xl mb-3'>Delete Member Details</h2>
        <p>Are you sure you want to delete this Member details? This actiuon cannot be undone.</p>
        <div className='flex justify-end'>
        <button onClick={()=>setDeleteOpen(false)} className='h-9 w-32 rounded-md text-2xl font-bold bg-purple-700 text-white'>Delete</button>
        </div>
      </Modal>
      <Modal
        isOpen={filterOpen}
        onRequestClose={closeModal}
        className='w-[14.2rem] min-h-40 absolute right-52 top-36 p-3 shadow-lg rounded-lg bg-white'
      >
      <div className='flex justify-between border-b-[1px] border-gray-400 text-xl'>
        <span>Filters</span> <IoIosArrowUp className='mt-1' />
      </div>
      <div className='flex justify-between mt-3'>
        <span className='flex text-lg gap-1'>{roles ? <IoIosCheckbox onClick={()=>setRoles(false)}  className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setRoles(true)} className='relative top-1 cursor-pointer' />} Roles</span> {roles ? <IoIosArrowUp className='mt-1' /> : <IoIosArrowDown className='mt-1' /> }
        </div>
        {roles ? <div>
          <div className='ml-5'>
        <span className='flex text-lg gap-1'>{pd ? <IoIosCheckbox onClick={()=>setPd(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setPd(true)} className='relative top-1 cursor-pointer' />} Product Designer</span>
        </div>
        <div className='ml-5'>
        <span className='flex text-lg gap-1'>{pm ? <IoIosCheckbox onClick={()=>setPm(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setPm(true)} className='relative top-1 cursor-pointer' />} Product Manager</span>
        </div>
        <div className='ml-5'>
        <span className='flex text-lg gap-1'>{fd ? <IoIosCheckbox onClick={()=>setFd(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank  onClick={()=>setFd(true)} className='relative top-1 cursor-pointer' />} Frontend Developer</span>
        </div>
        <div className='ml-5'>
        <span className='flex text-lg gap-1'>{bd ? <IoIosCheckbox onClick={()=>setBd(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setBd(true)} className='relative top-1 cursor-pointer' />} Backend Developer</span>
        </div>
        </div> : null}
        <div  className='flex justify-between mt-3'>
        <span className='flex text-lg gap-1'>{teams ? <IoIosCheckbox onClick={()=>setTeams(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setTeams(true)} className='relative top-1 cursor-pointer' />} Teams</span> {teams ? <IoIosArrowUp className='mt-1' /> : <IoIosArrowDown className='mt-1' /> }
        </div>
       { teams ? <div>
        <div className='ml-5'>
        <span className='flex text-lg gap-1'>{design ? <IoIosCheckbox onClick={()=>setDesign(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setDesign(true)} className='relative top-1 cursor-pointer' />} Design</span>
        </div>
        <div className='ml-5'>
        <span className='flex text-lg gap-1'>{product ? <IoIosCheckbox onClick={()=>setProduct(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setProduct(true)} className='relative top-1 cursor-pointer' />} Product</span>
        </div>
        <div className='ml-5'>
        <span className='flex text-lg gap-1'>{marketing ? <IoIosCheckbox onClick={()=>setMarketing(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setMarketing(true)} className='relative top-1 cursor-pointer' />} Marketing</span>
        </div>
        <div className='ml-5'>
        <span className='flex text-lg gap-1'>{tech ? <IoIosCheckbox onClick={()=>setTech(false)} className='relative top-1 cursor-pointer text-purple-700'/>  : <MdCheckBoxOutlineBlank onClick={()=>setTech(true)} className='relative top-1 cursor-pointer' />} Technology</span>
        </div>
       </div>: null
       }
       <button className='w-full text-white font-bold bg-purple-700'>SELECT</button>
      </Modal>
   <div className='p-6 flex min-h-[39rem]'>
    <div>
    <div onClick={()=>navigate('/')}  className='w-[18rem] cursor-pointer'>
    <PiSquaresFourFill className='relative top-8 text-3xl bg-black text-white rounded-md' /> <span className='text-2xl ml-10 font-semibold'>Overview</span>
    </div>
    <div onClick={()=>navigate('/people')} className='cursor-pointer'>
    <PiSquaresFourFill className='relative top-8 text-3xl bg-purple-700 text-white rounded-md' /> <span className='text-2xl ml-10 font-semibold text-purple-700'>People Directory</span>
    </div>
    </div>
    <div className='border-2 rounded-lg border-gray-300 min-h-full w-[75rem]'>
      <div className='h-12 p-2 border-b-2 border-gray-300 flex justify-between'>
       <div>
        <span className='text-xl font-bold mr-0'>Team members</span> 
        <span className='p-1 ml-3 border-2 border-gray-300 bg-purple-100 font-semibold text-purple-700 rounded-2xl'>100 users</span>
       </div>
       <div className='flex justify-center items-center'>
        <input className='w-60 mr-4 border-2 border-gray-300 rounded-md pl-2' type="text" placeholder='search' />
        <IoSearch className='relative -left-10 cursor-pointer' />
        <FiFilter onClick={filterBox} className='mr-4 text-xl'/>
        <button onClick={()=>setAddMember(true)} className='bg-purple-700 text-white font-semibold pl-4 pr-4 rounded-lg'>+ ADD MEMBER</button>
       </div>
      </div>
      <div className='border-b-2 border-gray-300 h-7 text-gray-500 flex items-center'>
        <span className='ml-4'>Name</span> 
        <FaArrowDown className='ml-8' />
        <span className='ml-[8.5rem]'>Status</span>
        <FaArrowDown className='ml-2' />
        <span className='ml-[4.7rem]'>Role</span>
        <GoQuestion className='ml-2'/>
        <span className='ml-[8.3rem]'>Email address</span>
        <span className='ml-[7.8rem]'>Teams</span>
      </div>
      {records.map((element)=>(
        <div className='border-b-2 p-2 border-gray-300 h-13 flex items-center'>
        <img className='h-10 w-10 mr-2 rounded-full cursor-pointer' src={element.avatar} onClick={()=>{navigate('/info', {state:{
          element
        }})}} alt="" /> 
        <div className='w-44'>
        <span className='font-semibold pl-4'>{element.name}</span> <div className='ml-4 mt-0'>{element.userName}</div>
        </div>
        <div className='w-24 mr-2'>
          <span className='text-md pl-3 border-2 border-gray-300 mb-2 rounded-xl pr-4'><span className='text-green-500 '>&#9679;</span> Active</span>
          </div>
          <div className='w-40 mr-4 text-gray-400'>
            {element.jobTitle}
          </div>
          <div className='w-60 mr-4 text-gray-400'>
            {element.email}
          </div>
          <div className='w-56'>
            <span className='border-2 border-gray-300 p-1 rounded-2xl bg-purple-200 text-purple-600 mr-2'>Design</span>
            <span className='border-2 border-gray-300 p-1 rounded-2xl bg-blue-200 text-blue-600 mr-2'>Product</span>
            <span className='border-2 border-gray-300 p-1 rounded-2xl bg-[#C7D7FE] text-[#3538CD] mr-2'>Marketing</span>
            <span className='border-2 border-gray-300 rounded-lg pl-2 pr-2'>+4</span>
          </div>
          <RiDeleteBin6Line onClick={deletebox} className='text-2xl ml-16' />
          <LuPen onClick={()=>{setIsOpen(true)
            setData(element)
          }} className='text-2xl ml-10' />
        </div>
      ))}
      <div className='flex justify-between'>
        <button onClick={prePage} className='ml-8 border-2 h-8 w-40 mt-[2px] text-lg font-semibold rounded-lg'>
            <a href='#'>&#8592; Previous </a>
            </button>
            <div>
            { 
              numbers.map((n, i)=>(
                  <button href="#" key={i} className={`${currPage === n ? 'active' : ''} h-8 mt-[2px] w-10 font-semibold text-lg`} onClick={()=>changeCPage(n)}>{n}</button>
              ))
            }
             </div>
            <button  onClick={nextPage} className='mr-8 border-2 h-8 w-40 mt-[2px] text-lg font-semibold rounded-lg'>
            <a href='#'> Next &#8594;</a>
            </button>
      </div>
    </div>
   </div>
   </>
  )
}

export default People