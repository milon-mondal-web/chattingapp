import React, { useEffect, useState } from 'react'
import CommonUsers from '../Common/CommonUsers/CommonUsers'
import './AllUsersCombo.css'
import CommonButtonV1 from '../Common/CommonButtonV1/CommonButtonV1'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';

const AllUsersCombo = () => {

    // ============= redux data========================
    const reduxuser = useSelector (( state)=> state.currentUser.value )


    // ============= state variables data===============
    const [AllUserData, SetAllUserData] = useState([])


    // ============= fairbase vareables  data===========
    const db = getDatabase();



    // ============= function part  data================
    const handelAdd = (data)=>{
      set( push(ref (db, 'friendRuquest/') ) , {
        senderId    :reduxuser.uid ,
        senderName  : reduxuser.displayName ,
        senderPhoto :reduxuser.photoURL ,
        receverId   : data.key,
        receverName : data.userName,
        receverPhoto:data.userPhoto

      });
     }

    // ============= realtime   data====================
    useEffect(()=>{
                 
                 onValue( ref (db, 'allUsers/') , (snapshot) => {
                    let arr = []
                    snapshot.forEach ((item)=>{
                        if (item.key != reduxuser.uid){
                          arr.push({...item.val() , key: item.key })
                        }
                    })
                    SetAllUserData(arr)
                  });
                },[])
                


  return (
    <>
      <section className=' all_users_combo' >
          <div className="container">
               <h2 className='all_user' >All Users</h2>
               {
                 AllUserData.map((item)=>(
                      <div key={item.key} className='common_detels' >
                           <CommonUsers commonuserphoto={item.userPhoto} commonusername={item.userName} />
                           <CommonButtonV1 common_button_v1_click={()=>handelAdd(item)} common_button_v1_content={'Add Friend '}/>
                      </div>
                 ))
               }

               
          </div>
      </section>
    
    </>
  )
}

export default AllUsersCombo