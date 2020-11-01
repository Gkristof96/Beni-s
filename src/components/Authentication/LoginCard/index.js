import React, { useContext} from 'react'
import { IoMdClose, IoMdAlert } from 'react-icons/io'
import AuthContext from '../../../contexts/authContext'
import InputField from '../../Contact/InputField'
import useFormLogin from '../../useFormLogin'
import validateLogin from '../../validateLogin'

const LoginCard = () => {
    const {setVisible,setLoginActive, handleLogin} = useContext(AuthContext)
    const { handleChange, handleSubmit, values, errors } = useFormLogin(
        validateLogin,
        handleLogin
    );

    return (
        <>
                <IoMdClose
                    className='close-btn'
                    onClick={() => setVisible(false)}
                />
                <h1 className='title'>Bejelentkezés</h1>
                <form onSubmit={handleSubmit}>
                        <InputField
                            name='email' 
                            handleChange={handleChange} 
                            value={values.email} 
                            placeholder='Email' 
                            type='text'
                        />
                        {errors.email && 
                            <p className='error-message'>
                                <IoMdAlert/>
                                {errors.email}
                            </p>
                        }
                        <InputField 
                            name='password' 
                            handleChange={handleChange} 
                            value={values.password} 
                            placeholder='Passsword' 
                            type='password'
                        />
                        {errors.password && 
                            <p className='error-message'>
                                <IoMdAlert /> 
                                {errors.password}
                            </p>
                        }
                    <h1 className='highlight-text'>Elfelejtett jelszó</h1>
                    <input
                        className='btn'
                        type='submit' 
                        value='bejelentkezés' />
                    <h1 className='text'>
                        Nincs még fiókod?
                        <span
                            className='highlight-text'
                            onClick={() => setLoginActive(false)}>
                            Regisztrálok
                        </span>
                    </h1>
                </form>     
        </>
    )
}

export default LoginCard
