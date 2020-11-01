import React, { useContext, useState} from 'react'
import { IoMdClose, IoMdAlert } from 'react-icons/io'
import AuthContext from '../../../contexts/authContext'
import InputField from '../../Contact/InputField'
import useForm from '../../useForm';
import validate from '../../validate'

const LoginCard = () => {
    const {setVisible,setLoginActive, handleLogin} = useContext(AuthContext)
    const [focus, setFocus] = useState(false)
    const { handleChange, handleSubmit, values, errors } = useForm(
        validate,
        handleLogin
    );

    return (
        <>
            <div className='login-card'>
                <IoMdClose
                    className='close-btn'
                    onClick={() => setVisible(false)}
                />
                <h1 className='title'>Bejelentkezés</h1>
                <form onSubmit={handleSubmit}>
                    <div className={`input-container ${focus ? 'focus' : null}`}>
                        <input
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            type='text'
                            className='input-field'
                            validate='no'
                        />
                        <span 
                            className='input-span' 
                            data-placeholder='Email' 
                        />
                        </div>
                        {errors.email && <p className='error-message'>{errors.email}</p>}
                        <div className={`input-container ${focus ? 'focus' : null}`}>
                            <input
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                type='password'
                                className='input-field'
                            />
                            <span 
                                className='input-span' 
                                data-placeholder='Jelszó'
                            />
                        </div>
                        {errors.password && <p className='error-message'>{errors.password}</p>}
                    <span className='highlight-text'>Elfelejtett jelszó</span>
                    <input
                        className='btn'
                        type='submit' 
                        value='bejelentkezés' />
                    <span className='text'>
                        Nincs még fiókod?
                        <span
                            className='highlight-text'
                            onClick={() => setLoginActive(false)}>
                            Regisztrálok
                        </span>
                    </span>
                </form>     
            </div>
        </>
    )
}

export default LoginCard
