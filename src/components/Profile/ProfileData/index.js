import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

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
            </div>
        </>
    )
}

export default ProfileData
