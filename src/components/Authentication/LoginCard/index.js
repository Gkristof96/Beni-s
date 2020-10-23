import React from 'react'
import { IoMdClose } from 'react-icons/io'
import InputField from '../../Contact/InputField'

const LoginCard = ({ setLoginActive }) => {
    return (
        <>
            <div className='login-card'>
                <IoMdClose className='close-btn'/>
                <h1 className='login-card__title'>Bejelentkezés</h1>
                <InputField type='email' placeholder='Email'/>
                <InputField type='password' placeholder='Jelszó'/>
                <span className='link-text'>Elfelejtett jelszó</span>
                <input className='btn' type='submit' value='bejelentkezés' />
                <span className='text'>Nincs még fiókod? <span className='link-text' onClick={() => setLoginActive(false)}>Regisztrálok</span></span>
            </div>
        </>
    )
}

export default LoginCard
