import React, { useContext} from 'react'
import AuthContext from '../../contexts/authContext'
import LoginCard from './LoginCard'
import RegistrationCard from './RegisterCard'

const Authentication = () => {
    const {loginActive}  = useContext(AuthContext)
    return (
        <>
            <section className='authentication'>
                <div className={`authentication-card ${loginActive ? 'login' : 'registration'}`}>
                    {loginActive ? <LoginCard/> : <RegistrationCard/>}
                </div>
            </section>
        </>
    )
}

export default Authentication
