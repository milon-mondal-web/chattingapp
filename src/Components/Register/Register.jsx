import React, { useState } from 'react'
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { Flip, toast } from 'react-toastify';
import {  CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {  updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; 

const Register = () => {
    // ============ password icone use start =======================
    const [show , setshow ] = useState (false)
    const handelshow = ()=> {
        setshow (!show)
    }
    // ============ password icone use end  =========================

    // ============ login  navegatec vareable part  =================
    const navigate = useNavigate ()
    
    // =============from velidation=================
    const [name , setname] = useState ('')
    const [email , setemail] = useState ('')
    const [password , setpassword] = useState ('')
    // ============ button  vareable part  =================
    const [lodding , setlodding] = useState (false)


    const [nameError , setNameError] = useState ('')
    const [emailError , setemailError] = useState ('')
    const [passwordError , setpasswordError] = useState ('')

    // ================fairbase part ===========================
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

  // ========= function part start==================  
    
    const handelSubmit= (e)=>{
      setlodding(true)
       e.preventDefault()
       if (!name) {
        setNameError('Enter Your Name') 
       } 
       if (!email) {
        setemailError('Enter Your Gmail') 
       } 
       if (!password) {
        setpasswordError('Enter Your Password') 
       }else{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
          const user = userCredential.user;
          console.log ( user );
         
          // ...
          sendEmailVerification(auth.currentUser)
                .then(() => {
                  // ========= button user ========
                  setlodding (false)
                  // ===========set user name and profile use==============
                  updateProfile(auth.currentUser, {
                    displayName: name , 
                    photoURL: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                  }) .then(()=>{
                    navigate('/Login')
                    // ===========Email user verification  use ==============
                    toast.success('Email Verification Send', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      transition: Flip,
                      });


                  })
               

               
  });
        })
        .catch((error) => {
          setlodding(false)
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == 'auth/email-already-in-use'){
            toast.error('Email Has Already Taken', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Flip,
              });
          }
          // ..
        });
       } 
    }       

    // ============== google sing in button ====================
    const handelgoogle = ()=>{
                    signInWithPopup(auth, provider)
                    navigate('/')
                   .then((result) => {
                     const credential = GoogleAuthProvider.credentialFromResult(result);
                     const token = credential.accessToken;
                     const user = result.user;
                   }).catch((error) => {
                     const errorCode = error.code;
                     const errorMessage = error.message;
                     const email = error.customData.email;
                     const credential = GoogleAuthProvider.credentialFromError(error);
                   });
                  }


  return (
  <>
    <div className="account">
           <div className="account_text">
               <h1>Find 3D Objects, Mockups and
               Illustrations here.</h1>
               <div className="account_imge">

               <img src="Images/registerbg.png" alt=" register img" />
               </div>
           </div>
           <div className="account_from">
                <div className="account_from_head">
                      <h2>Create Account</h2>
                      <div className="other_account_acess">
                        <button onClick={handelgoogle} > <img src="Images/googleLogo.png" alt=" google logo" />  <h3>Sign up with google</h3> </button>
                        <button> <img src="Images/fblogo.png" alt=" facebookj logo" />  <h3>Sign up with Facebook
                        </h3> </button>
                      </div>
                       <h4>- OR -</h4>
                </div>
                <div className="account_main_from">
                    <form onSubmit={handelSubmit}  >
                         {/* ========== user name  input  ============ */}

                        <div className="form__group field">
                             <input onChange={ (e)=> {setname(e.target.value) , setNameError('')}  } type="input" className="form__field" placeholder="Name" required="" />
                             <label for="name" className="form__label">Full name</label>
                             <p className='para ' >{nameError}</p>
                        </div>

                         {/* ========== Email Address  input  ============ */}

                        <div className="form__group field">
                            <input onChange={(e)=> { setemail (e.target.value) , setemailError('')} }  type="Email" className="form__field" placeholder="Name" required="" />
                            <label for="name" className="form__label">Email Address </label>
                            <p className='para' >{emailError} </p>
                        </div>

                         {/* ==========Password address  input  ============ */}

                        <div className="form__group field">
                            {
                              show? 
                              <GoEye   onClick={handelshow}  className=' absolute top-[70px]  right-[55px] text-2xl text-[#A6A6A6]  '  />
                              :
                              <GoEyeClosed    onClick={handelshow} className=' absolute top-[70px]  right-[55px] text-2xl text-[#A6A6A6]  '  />
                            }
                            <input onChange={(e)=> { setpassword (e.target.value)  , setpasswordError('')}} type={ show? "text" : "password"  }   className="form__field" placeholder="Name" required="" />

                            <label for="name" className="form__label">Password</label>
                            <p className='para' >{passwordError}</p>
                        </div>

                        {/* ================ button from address================ */}
                         {
                          lodding?
                          <button type='submit' ><ClipLoader color='red' /></button>
                          :
                          <button type='submit' >Create Account</button>
                         }
                          <p>Already have an account?<span onClick={ ()=>navigate ('/Login')  }  >Login</span></p>



                    </form>
          
                </div>

             
           </div>
    </div>
  
  
  
  
  </>
  )
}

export default Register