import React, { useEffect, useState } from 'react'
import CommonUsers from '../Common/CommonUsers/CommonUsers'
import CommonButtonV1 from '../Common/CommonButtonV1/CommonButtonV1'
import RemoveButton from '../Common/RemoveButton/RemoveButton'
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue } from "firebase/database";
const SenderReqcombo = () => {


        // ============= redux data========================
        const reduxuser = useSelector (( state)=> state.currentUser.value )


        // ============= all variables data===============
        const [allReq , setAllReq] = useState ([])


        // ============= fairbase vareables  data===========
        const db = getDatabase();


        // ============= function part  data================


         // ============= realtime   data====================
        // ====priting friend request data=====
        useEffect (()=>{
       
            onValue( ref(db, 'friendRuquest/'), (snapshot) => {
               let arr = []
                snapshot.forEach((item)=>{
                    if (item.val().senderId == reduxuser.uid){
                        arr.push({...item.val() , key: item.key })
                      }

                })
                setAllReq (arr)
            });
        } , [])
        





  return (
    <>

    <section className=' all_users_combo' >
          <div className="container">
               <h2 className='all_user' > Sender Request</h2>

               {
                allReq.map((item)=>(
                      <div key={item.key}  className='common_detels' >
                           <CommonUsers  commonusername={item.receverName} commonuserphoto={ item.receverPhoto} />
                           <div className='flex gap-5'  >
                           <RemoveButton remove_button_content={'Delete'}  />
                           <CommonButtonV1  common_button_v1_content={'Confirm'}/>
                           </div>
                      </div>
                ))
               }
              
              

               
          </div>
      </section>
     </>
  )
}

export default SenderReqcombo