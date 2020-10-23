import React, { useState } from 'react'
import LoginCard from './LoginCard'
import RegistrationCard from './RegisterCard'

const Authentication = ({ setVisible }) => {
    const [loginActive, setLoginActive] = useState(true)
    return (
        <>
            <section className='authentication'>
                {loginActive ? <LoginCard setVisible={setVisible} setLoginActive={setLoginActive}/> : <RegistrationCard setVisible={setVisible} setLoginActive={setLoginActive} />}
            </section>
        </>
    )
}

export default Authentication
