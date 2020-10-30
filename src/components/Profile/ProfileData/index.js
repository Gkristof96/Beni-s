import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'

const ProfileData = ({user, isSettingOpen, setIsOpen}) => {
    return (
        <>  
            <div className='profile-data'>
                    <h1 className='profile-name'>{`${user.lastname} ${user.firstname}`}</h1>
                    <BsFillGearFill className='settings' onClick={() => setIsOpen(!isSettingOpen)}/>
                <div className='text-wrapper'>
                    <FaPhoneAlt className='profile-icon'/>
                    <h1 className='profile-tel'>{user.tel}</h1>
                </div>
                <div className='text-wrapper'>
                    <FaEnvelope className='profile-icon'/>
                    <h1 className='profile-email'>{user.email}</h1>
                </div>
                <h1 className='profile-order'>Rendelések száma: {user.order_count}</h1>
            </div>
        </>
    )
}

export default ProfileData
