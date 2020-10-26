import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

const ProfileData = () => {
    return (
        <>      
            <div className='profile-data'>
                <div className='text-wrapper'>
                    <h1>Nagy Lajos</h1>
                </div>
                <div className='text-wrapper'>
                    <FaPhoneAlt />
                    <h1> +36 30 756 3845</h1>
                </div>
            </div>
        </>
    )
}

export default ProfileData
