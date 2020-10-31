import React, { useContext} from 'react'
import { IoMdClose } from 'react-icons/io'
import AuthContext from '../../../contexts/authContext'
import InputField from '../../Contact/InputField'

const LoginCard = () => {
    const {setVisible,setLoginActive, handleLogin} = useContext(AuthContext)
    return (
        <>
            <div className='login-card'>
                <IoMdClose
                    className='close-btn'
                    onClick={() => setVisible(false)}
                />
                <h1 className='title'>Bejelentkezés</h1>
                <InputField
                    type='email'
                    placeholder='Email'
                />
                <InputField
                    type='password'
                    placeholder='Jelszó'
                />
                <span className='link-text'>Elfelejtett jelszó</span>
                <input
                    className='btn'
                    onClick={() => handleLogin()} 
                    type='submit' 
                    value='bejelentkezés' />
                <span className='text'>
                    Nincs még fiókod?
                    <span
                        className='link-text'
                        onClick={() => setLoginActive(false)}>
                        Regisztrálok
                    </span>
                </span>
            </div>
        </>
    )
}

export default LoginCard
