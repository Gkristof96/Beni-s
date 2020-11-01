import React, { useContext} from 'react'
import AuthContext from '../../contexts/authContext'
import LoginCard from './LoginCard'
import RegistrationCard from './RegisterCard'

const Authentication = () => {
    const {isloginActive}  = useContext(AuthContext)
    return (
        <>
            <section className='authentication'>
                <div className={`authentication-card ${isloginActive ? 'login' : 'registration'}`}>
                    {isloginActive ? <LoginCard/> : <RegistrationCard/>}
                </div>
            </section>
        </>
    )
}

export default Authentication
