import React from 'react'
import './CommonUsers.css'

const CommonUsers = ({commonuserphoto,commonusername }) => {
  return (
    <>
    <div className='common_user  ' >
            <div className="common_users_img">
                 <img src={commonuserphoto} alt="users" />
            </div>
            <h2>{commonusername}</h2>
          

    </div>

        
    
    </>
  )
}

export default CommonUsers