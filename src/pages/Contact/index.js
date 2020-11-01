import React, { useState } from 'react'
import InputField from '../../components/Contact/InputField'
import TextField from '../../components/Contact/TextField'

const Contact = () => {
    const [values, setValues] = useState({
        email: '',
        firstname: '',
        lastname: '',
        counter: ''
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
            <section className='contact-section'>
                <div className='contact-container'>
                    <h1 className='page-title'>Kapcsolat</h1>
                    <div className='line' />
                    <p>További kérdése van, részleges tájékoztatásra van szűksége? Írjon nekünk, keresse munkatársainkat!</p>
                    <div className='inputs'>

                        <InputField 
                            name='firstname' 
                            type='text' placeholder='Vezetéknév' 
                            handleChange={handleChange} 
                            value={values.firstname}
                        />
                        <InputField 
                            name='lastname' 
                            type='text' placeholder='Keresztnév'
                            handleChange={handleChange} 
                            value={values.lastname}
                        />
                        <InputField 
                            name='email' 
                            type='email' placeholder='Email'
                            handleChange={handleChange} 
                            value={values.email}
                        />
                        <InputField 
                            name='order_counter' type='text' 
                            placeholder='Rendelés azonosító'
                            handleChange={handleChange} 
                            value={values.counter}
                        />
                        <TextField placeholder='Üzenet'/>

                        <div>
                            <input type='checkbox' className='checkbox' />
                            Elfogadom az <a href='/'>Adatvédelmi Nyilatkozat</a>-ot.
                        </div>
                        <input type='submit' className='btn' value='Küldés'/>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Contact
