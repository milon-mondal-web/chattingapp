import React from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import { FaUserGraduate } from "react-icons/fa";
import { TbFriendsOff } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { FaUserPlus } from "react-icons/fa";
import { PiUserListBold } from "react-icons/pi";
const Navber = () => {
  // ==================all veriable part ============================
  const navigate = useNavigate ()
  // ================== profile data redux part  ===================
  const  sliceUser = useSelector((state)=> state.currentUser.value )
  
  // ==================logout  function part ==============
  const handelLogOut = ()=> {
     navigate('/Login')
     // ============= local storage remove data=============
     localStorage.removeItem('user')
  }

  return (
    <>
          <nav className=' absolute z-50 p-3 top-[50%] translate-y-[-50%]  right-20 border-[1px] border-brandcolours rounded-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ' >

                      <div className="    py-3  flex flex-col  gap-5   rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                                 {/* =============== User part ======================= */}
                               <div className="group relative px-3 cursor-pointer">
                                     <div className="flex h-10 w-10 text-[30px]  items-center justify-center rounded-full hover:text-blue-500 active:scale-[1.1] ">
                                         <Link to={'/allusers'} > <FaUserGraduate /> </Link>
                                    </div>
                                    <span className="absolute  left-[-103%] -translate-y-[90%] z-20 origin-top-right scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 hover:bg-brandcolours hover:text-red-600 hover:border-black ">
                                      All User
                                    </span>
                               </div>
                               {/* ==================== Friends Request part ======================= */}
                               <div className="group relative px-4 cursor-pointer">
                                     <div className="flex h-10 w-10  text-[30px]  items-center justify-center rounded-full hover:text-blue-500 active:scale-[1.1] ">
                                         <Link to={'/friendreq'} > <FaUserPlus /> </Link>
                                    </div>
                                    <span className="absolute left-[-175%] -translate-y-[80%] z-20 origin-top-right  scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100  hover:bg-brandcolours hover:text-red-600 hover:border-black ">
                                      Friends Request 
                                    </span>
                               </div>
                               {/* ==================== Friends Sender Request list part ======================= */}
                               <div className="group relative px-4 cursor-pointer">
                                     <div className="flex h-10 w-10  text-[30px]  items-center justify-center rounded-full hover:text-blue-500 active:scale-[1.1] ">
                                         <Link to={'/senderreq'} > <PiUserListBold /> </Link>
                                    </div>
                                    <span className="absolute left-[-173%] -translate-y-[90%] z-20 origin-top-right  scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100  hover:bg-brandcolours hover:text-red-600 hover:border-black ">
                                    Sender Request
                                    </span>
                               </div>
                               {/* ============  Block List part ========================= */}
                               <div className="group relative px-4 cursor-pointer">
                                     <div className="flex h-10 w-10  text-[30px]  items-center justify-center rounded-full hover:text-blue-500 active:scale-[1.1]">
                                         <Link to={'/'} > <TbFriendsOff/> </Link>
                                    </div>
                                    <span className="absolute left-[-83%] -translate-y-[90%] z-20 origin-top-right scale-0 rounded-lg border border-gray-300 bg-white lg:px-3 py-2 px-3  text-sm text-[10px] font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100  hover:bg-brandcolours hover:text-red-600 hover:border-black ">
                                      Block 
                                    </span>
                               </div>
                               {/* ============  Profile part ========================= */}
                               <div className="group relative px-4 cursor-pointer">
                                     <div className="flex h-10 w-10  text-[30px]  items-center justify-center rounded-full hover:text-blue-500 active:scale-[1.1] ">
                                         <Link to={'/'} > 
                                             <div className='w-[50px] h-[50px] bg-slate-400  rounded-full  overflow-hidden justify-center items-center flex border-[4px] border-brandcolours ' >
                                                <img src={sliceUser?.photoURL} alt="Profile photo" />
                                             </div>
                                          </Link>
                                    </div>
                                    <span className="absolute left-[-92%] -translate-y-[90%] z-20 origin-top-right scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100  hover:bg-brandcolours hover:text-red-600 hover:border-black ">
                                      Profile
                                    </span>
                               </div>

                               {/* =========== people All Friends part ================ */}
                               <div className="group relative px-4 cursor-pointer">
                                     <div className="flex h-10 w-10  text-[30px]  items-center justify-center rounded-full hover:text-blue-500 active:scale-[1.1]">
                                         <Link to={'/friendsaccep'} > <IoIosPeople/> </Link>
                                    </div>
                                    <span className="absolute left-[-127%] -translate-y-[90%] z-20 origin-top-right scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100  hover:bg-brandcolours hover:text-red-600 hover:border-black">
                                    All Friends
                                    </span>
                               </div>
                               {/* ======== message part ========== */}
                               <div className="group relative px-4 cursor-pointer">
                                     <div className="flex h-10 w-10  text-[30px]  items-center justify-center rounded-full hover:text-blue-500 active:scale-[1.1] ">
                                         <Link to={'/'} > <FaMessage/> </Link>
                                    </div>
                                    <span className="absolute left-[-110%] -translate-y-[90%] z-20 origin-top-right scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100  hover:bg-brandcolours hover:text-red-600 hover:border-black">
                                       Message
                                    </span>
                               </div>
                               {/* ========  Logout part ========== */}
                               <div className="group relative px-4 cursor-pointer">
                                     <div className="flex h-10 w-10  text-[30px]  items-center justify-center rounded-full hover:text-blue-500 active:scale-[1.1] ">
                                         <button onClick={handelLogOut} ><IoLogOut/></button>
                                    </div>
                                    <span onClick={handelLogOut} className="absolute left-[-100%] -translate-y-[90%] z-20 origin-top-right scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100  hover:bg-brandcolours hover:text-red-600 hover:border-black">
                                     LogOut
                                    </span>
                               </div>
                    </div>
           
                
               
          </nav>
    
    </>
    


  )
}

export default Navber