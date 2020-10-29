import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DeliveryData from '../../components/Profile/DeliveryData'
import ProfileData from '../../components/Profile/ProfileData'
import { BsFillGearFill } from 'react-icons/bs'
import ProfileSettings from '../../components/Profile/ProfileSettings'

const Profile = () => {
    const [ isSettingOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)

    async  function fetchUser() {
        await axios
            .get("../data/user.json")
            .then((response) => {
                setUser(response.data);
                setLoading(false)
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <>
            <section className='profile-section'>
                <div className='profile-container'>
                    <h1 className='profile-title'>Profil<BsFillGearFill onClick={() => setIsOpen(!isSettingOpen)}/></h1>
                    <div className='line' />
                    {isSettingOpen ? <ProfileSettings user={user} setUser={setUser} setIsOpen={setIsOpen} /> : <ProfileData user={user} /> }
                    {isLoading ? null : <DeliveryData setUser={setUser} user={user} addresses={user.addresses} />}
                    
                </div>
            </section>
        </>
    )
}

export default Profile
