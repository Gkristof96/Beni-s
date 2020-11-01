import React, { useContext, useState } from 'react'
import InputField from '../../Contact/InputField'
import { IoMdClose } from 'react-icons/io'
import AuthContext from '../../../contexts/authContext'

const RegistrationCard = () => {
    const { setLoginActive, setVisible } = useContext(AuthContext)
    const [values, setValues] = useState({
        email: '',
        password: '',
        cpassword: '',
      });
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
    };
    return (
        <>
                <IoMdClose className='close-btn' onClick={() => {
                    setVisible(false)
                    setLoginActive(true)
                }}/>
                <h1 className='title'>Regisztráció</h1>
                <form>
                    <InputField
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={values.email}
                        handleChange={handleChange}
                    />
                    <InputField 
                        type='password' 
                        placeholder='Jelszó'
                        name='password'
                        value={values.password}
                        handleChange={handleChange}
                    />
                    <InputField 
                        type='password' 
                        placeholder='Jelszó újra'
                        name='cpasssowrd'
                        value={values.cpassword}
                        handleChange={handleChange}
                    />
                    <div className='checkbox-bar'>
                        <input type='checkbox' />
                        <span className='text'>
                            Elfogadom az 
                            <span className='highlight-text'>
                                Adatvédelmi Nyilatkozatot.
                            </span>
                        </span>
                    </div>
                    <input className='btn' type='submit' value='regisztráció' />
                    <h1 
                        className='text'>Van már fiókod? 
                        <span
                            className='highlight-text' 
                            onClick={() => setLoginActive(true)}>
                            Bejelentkezés
                        </span>
                    </h1>
                </form>
        </>
    )
}

export default RegistrationCard
