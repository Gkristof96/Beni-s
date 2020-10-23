import React, { useState } from 'react'
import LoginCard from './LoginCard'
import RegistrationCard from './RegisterCard'

const Authentication = () => {
    const [loginActive, setLoginActive] = useState(true)
    return (
        <>
            <section className='authentication'>
                {loginActive ? <LoginCard setLoginActive={setLoginActive}/> : <RegistrationCard setLoginActive={setLoginActive} />}
            </section>
        </>
    )
}

export default Authentication
