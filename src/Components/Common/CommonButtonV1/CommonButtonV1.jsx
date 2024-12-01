import React from 'react'
import './CommonButtonV1.css'

const CommonButtonV1 = ({common_button_v1_content , common_button_v1_click }) => {
  return (
   <>
     <button onClick={common_button_v1_click} className='button_v1'> {common_button_v1_content}</button>
   
   </>
  )
}

export default CommonButtonV1