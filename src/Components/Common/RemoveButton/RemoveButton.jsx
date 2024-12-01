import React from 'react'

const RemoveButton = ({remove_button_content , remove_button_click}) => {
  return (
    <>
      <button onClick={remove_button_click} className=' py-1 px-9 rounded-[10px] text-[12px] bg-slate-200 text-black active:scale-[1.1] '> {remove_button_content} </button>
    
    </>
  )
}

export default RemoveButton