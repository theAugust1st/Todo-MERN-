import React from 'react'
import sampleProfile from '../../public/Default_pfp.svg.png';
const Profile = () => {
  return (
    <div className='flex items-center m-2 space-x-2 border-b py-5'>
        <img className='size-14' src={sampleProfile} alt='defaultImage'></img>
        <h2 className="text-white">Full Name</h2>
    </div>
  )
}

export default Profile