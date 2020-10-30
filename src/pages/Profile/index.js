import React, { useState, useEffect, useContext } from 'react'
import DeliveryData from '../../components/Profile/DeliveryData'
import ProfileData from '../../components/Profile/ProfileData'
import ProfileSettings from '../../components/Profile/ProfileSettings'
import { AuthContext } from '../../contexts/authContext'

const Profile = () => {
    const [ isSettingOpen, setIsOpen] = useState(false)
    const {isLoading, user, setUser, fetchUser} = useContext(AuthContext)


    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <>
            <section className='profile-section'>
                    <h1 className='page-title'>Profil</h1>
                    <div className='line' />
                    <div className='profile-container'>
                        {isSettingOpen ? <ProfileSettings user={user} setUser={setUser} setIsOpen={setIsOpen} /> : <ProfileData setIsOpen={setIsOpen} isSettingOpen={isSettingOpen} user={user} /> }
                        {isLoading ? null : <DeliveryData setUser={setUser} user={user} addresses={user.addresses} />}
                    </div>
            </section>
        </>
    )
}

export default Profile
