import React, { useEffect, useState } from 'react'
import CommonUsers from '../Common/CommonUsers/CommonUsers'
import CommonButtonV1 from '../Common/CommonButtonV1/CommonButtonV1'
import RemoveButton from '../Common/RemoveButton/RemoveButton'
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
const FriendReqCombo = () => {


        // ============= redux data========================
        const reduxuser = useSelector (( state)=> state.currentUser.value )


        // ============= all variables data===============
        const [allReq , setAllReq] = useState ([])


        // ============= fairbase vareables  data===========
        const db = getDatabase();


        // ============= function part  data================
        const handelremove =(reqdata)=>{
           remove (ref(db, 'friendRuquest/' + reqdata.key ))
        }

        
         const handelconfirm = (friendsData)=>{
          set( push(ref(db, 'firends/' )), {
            friendsId        : friendsData.senderId,
            friendsPhoto     : friendsData.senderPhoto,
            friendsName      : friendsData.senderName,
            currentUserId    : reduxuser.uid,
            currentUserName  : reduxuser.displayName,
            currentUserPhoto : reduxuser.photoURL
           
          });
          remove (ref(db, 'friendRuquest/' + friendsData.key ))
              

         }


         // ============= realtime   data====================
        // ====priting friend request data=====
        useEffect (()=>{
       
            onValue( ref(db, 'friendRuquest/'), (snapshot) => {
               let arr = []
                snapshot.forEach((item)=>{
                    if (item.val().receverId == reduxuser.uid){
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
               <h2 className='all_user' >Friends Request</h2>

               {
                allReq.map((item)=>(
                      <div key={item.key}  className='common_detels' >
                           <CommonUsers  commonusername={item.senderName} commonuserphoto={ item.senderPhoto} />
                           <div className='flex gap-5'  >
                           <RemoveButton remove_button_click={()=>handelremove(item)} remove_button_content={'Delete'}  />
                           <CommonButtonV1 common_button_v1_click={()=>handelconfirm(item)} common_button_v1_content={'Confirm'}/>
                           </div>
                      </div>
                ))
               }
              
              

               
          </div>
      </section>
     </>
  )
}

export default FriendReqCombo