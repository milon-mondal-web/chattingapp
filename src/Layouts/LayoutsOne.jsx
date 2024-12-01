import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Navber from '../Components/Navbar/Navber'



const LayoutsOne = () => {
  const  sliceUser = useSelector((state)=> state.currentUser.value )
  const navigate = useNavigate()
  useEffect (()=>{
    if(sliceUser == null){
      // =========navigate data part ========================
      navigate('/Login')
      
    } 
  },[])


  return (
          <>
           <Navber/>
           <Outlet/>
          </>
  )
}

export default LayoutsOne

