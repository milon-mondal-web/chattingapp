import React, { useEffect, useState } from 'react'
import CommonUsers from '../Common/CommonUsers/CommonUsers'
import RemoveButton from '../Common/RemoveButton/RemoveButton'
import CommonButtonV1 from '../Common/CommonButtonV1/CommonButtonV1'
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";

const FriendAccepCombo = () => {
          // ============= redux data========================
          const sliceuser = useSelector (( state)=> state.currentUser.value )

          // ============= all variables data===============
          const [Allfriend , Setallfriend] = useState ([])



          // ============= fairbase vareables  data==========
          const db = getDatabase();


          // ============= function part  data================
          const handelblock = (blockusersdata)=>{
              set( push(ref(db, 'blockusers/' )) , {
                blockusersId : blockusersdata.friendsId,
                blockusersName : blockusersdata.friendsName,
                blockusersPhoto : blockusersdata.friendsPhoto,
                currentUserId : sliceuser.uid
            
            });
            remove (ref (db , 'firends' + blockusersdata.key))

          }



          // ============= realtime   data====================
                          
            useEffect (()=>{
                onValue(ref (db, '/firends'), (snapshot) => {
                    let arr = []
                    snapshot.forEach((item)=>{
                        if(item.val().currentUserId == sliceuser.uid){
                            arr.push({ friendsId: item.val().friendsId , friendsName: item.val().friendsName , friendsPhoto: item.val().friendsPhoto ,  key: item.key })

                        }else if (item.val().friendId == sliceuser.uid){
                          arr.push({friendsId: item.val().currentUserId , friendsName: item.val().currentUserName, friendsPhoto : item.val().currentUserPhoto , key:item.key})
                        }
                       
                    })
                    Setallfriend(arr)
             
                  });
            }, [])





  return (
    <>

    <section className=' all_users_combo' >
          <div className="container">
               <h2 className='all_user' >All Friends</h2>
               {
                Allfriend.map((item)=>{
                    return(

                      <div key={item.key}  className='common_detels' >
                           <CommonUsers  commonusername={item.friendsName} commonuserphoto={item.friendsPhoto} />
                           <div className='flex gap-5'  >
                           <RemoveButton  remove_button_content={'Unfriend'}  />
                           <CommonButtonV1  common_button_v1_click={()=> handelblock(item)}  common_button_v1_content={'Block'}/>
                           </div>
                      </div>

                    )
                })
               }

             
               
              

               
          </div>
      </section>
     </>



  )
}

export default FriendAccepCombo