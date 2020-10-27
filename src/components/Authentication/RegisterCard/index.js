import React, { useContext } from 'react'
import InputField from '../../Contact/InputField'
import { IoMdClose } from 'react-icons/io'
import AuthContext from '../../../contexts/authContext'

const RegistrationCard = () => {
    const { setLoginActive, setVisible } = useContext(AuthContext)
    return (
        <>
            <div className='registration-card'>
                <IoMdClose className='close-btn' onClick={() => setVisible(false)}/>
                <h1 className='registration-card__title'>Regisztráció</h1>
                <InputField type='email' placeholder='Email'/>
                <InputField type='password' placeholder='Jelszó'/>
                <InputField type='password' placeholder='Jelszó újra'/>
                <div className='checkbox-bar'>
                    <input type='checkbox' />
                    <span className='text'> Elfogadom az <span className='link-text'>Adatvédelmi Nyilatkozatot.</span></span>
                </div>
                <input className='btn' type='submit' value='regisztráció' />
                <span className='text'>Van már fiókod? <span className='link-text' onClick={() => setLoginActive(true)}>Bejelentkezés</span></span>
            </div>
        </>
    )
}

export default RegistrationCard
