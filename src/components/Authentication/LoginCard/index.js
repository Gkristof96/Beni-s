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
                        <InputField name='email' handleChange={handleChange} value={values.email} placeholder='Email' type='text'/>
                        {errors.email && <p className='error-message'><IoMdAlert/> {errors.email}</p>}
                        <InputField name='password' handleChange={handleChange} value={values.password} placeholder='Passsword' type='password'/>
                        {errors.password && <p className='error-message'><IoMdAlert /> {errors.password}</p>}
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
