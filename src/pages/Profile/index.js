import React, { useState } from 'react'
import DeliveryData from '../../components/Profile/DeliveryData'
import ProfileData from '../../components/Profile/ProfileData'
import { BsFillGearFill } from 'react-icons/bs'
import ProfileSettings from '../../components/Profile/ProfileSettings'

const Profile = () => {
    const [ isSettingOpen, setIsOpen] = useState(false)
    return (
        <>
            <section className='profile-section'>
                <div className='profile-container'>
                    <h1 className='profile-title'>Profil adatok <BsFillGearFill onClick={() => setIsOpen(!isSettingOpen)}/></h1>
                    <div className='line' />
                    {isSettingOpen ? <ProfileSettings /> : <ProfileData /> }
                    <DeliveryData />
                </div>
            </section>
        </>
    )
}

export default Profile
