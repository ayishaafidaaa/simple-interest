
import React from 'react'

function User({userkey}) {

  console.log(userkey);

    // js content

  return (

    // jsx content

    
    <div className='text-center' >

    {
      userkey&&

      // truthy operator


      <h1 className='text-primary'>username: <span className='text-danger'>{userkey} </span> </h1>
     }


     
     

    </div>
  )
}

export default User
