import React, { useState } from 'react'
import { GoEyeClosed } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"; 
import { Bounce, toast } from 'react-toastify';

const Login = () => {
    // ============ password icone use start =======================
    const [show , setshow ] = useState (false)
    const handelshow = ()=> {
        setshow (!show)
    }
    // ============ password icone use end  =========================

    // ============ login  navegatec vareable part  =================
    const navigate = useNavigate ()

    // =============from velidation=================
    const [email , setemail] = useState ('')
    const [password , setpassword] = useState ('')

    const [emailError , setemailError] = useState ('')
    const [passwordError , setpasswordError] = useState ('')

    // ================fairbase part ===========================
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const handelSubmit= (e)=>{
       e.preventDefault()
       if (!email) {
        setemailError('Enter Your Gmail')
       }
       if (!password) {
        setpasswordError('Enter Your Password')
       }else{
               signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                 // Signed in 
                 const user = userCredential.user;
                 console.log(userCredential.user)
                 if(user.emailVerified === false){
                  toast.error('Email is not verified', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });

                 }else{
                   navigate('/Home')
                  toast.success('Login success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
                 }
                 // ...
                         })
               .catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
                 console.log (errorCode)
                 if(errorCode == 'auth/invalid-credential'){
                  toast.error('something went wrong ', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    });
                 }
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
                      <h2>Login</h2>
                      <div className="other_account_acess">
                        <button onClick={handelgoogle} > <img src="Images/googleLogo.png" alt=" google logo" />  <h3>Sign in with google</h3> </button>
                        <button> <img src="Images/fblogo.png" alt=" facebookj logo" />  <h3>Sign  in with Facebook
                        </h3> </button>
                      </div>
                       <h4>- OR -</h4>
                </div>
                <div className="account_main_from">
                    <form onSubmit={handelSubmit}  >
                      

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
                            <input  onChange={(e)=> { setpassword (e.target.value)  , setpasswordError('')}}type={ show? "text" : "password"  }   className="form__field" placeholder="Name" required="" />

                            <label for="name" className="form__label">Password</label>
                            <p className='para' >{passwordError}</p>
                        </div>

                        {/* ================ button from address================ */}
                          <button type='submit' >Create Account</button>
                          <p>Already have an account?<span onClick={ ()=>navigate ('// Register')  }  >Register</span></p>



                    </form>
          
                </div>

             
           </div>
    </div>
  
  
  
  
  </>
  )
}

export default Login