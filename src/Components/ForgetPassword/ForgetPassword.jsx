import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
// =============== email note veriable  ================
    const [InputData , SetInputData] = useState ('')
    // ============== email reset part ================
    const auth = getAuth();
     // =========== button click variable ==================
    const handelReset = ()=>{
         if(!InputData){
            alert ('Inter Your Gmail' )
        } else {
              sendPasswordResetEmail(auth, InputData)
               .then(() => {
                 // Password reset email sent!
               // ..
              })
               .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
    // ..
  });
        }

         }            
         
       
   

    
  return (
    <>
         
        <div className=' w-full h-screen flex justify-center items-center flex-col' >
             <h2 className='lg:text-[20px] text-[10px] text-[#A6A6A6] font-poppins font-medium ' >Reset Password </h2>
        <div className="relative  mt-6">
  <input
   onChange={ (e)=> SetInputData(e.target.value)}
    type="email"
    placeholder="Email address"
    autoComplete="email"
    aria-label="Email address"
    className="block w-[500px] rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
  />
  <div className="absolute inset-y-1 right-1 flex justify-end">
    <button
       onClick={handelReset}
      type="submit"
      aria-label="Submit"
      className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-brandcolours transition hover:bg-neutral-800"
    >
      <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
        ></path>
      </svg>
    </button>
  </div>
</div>
     <Link to={'/Login'} className='mt-5 lg:text-[20px] text-[10px] text-[#A6A6A6]   font-poppins font-medium '  > Remember? Password?  <span className='text-brandcolours' >Login</span> </Link>
        </div>

    
    </>
  )
}

export default ForgetPassword