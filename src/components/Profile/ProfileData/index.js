import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const ProfileData = ({user}) => {
    return (
        <>  
            <h1>Adatok</h1>
            <div className='profile-data'>
                <div className='text-wrapper'>
                    <h1>{`${user.lastname} ${user.firstname}`}</h1>
                </div>
                <div className='text-wrapper'>
                    <FaPhoneAlt />
                    <h1>{user.tel}</h1>
                </div>
                <div className='text-wrapper'>
                    <FaEnvelope />
                    <h1>{user.email}</h1>
                </div>
                <h1>{user.order_count}</h1>
            </div>
        </>
    )
}

export default ProfileData
