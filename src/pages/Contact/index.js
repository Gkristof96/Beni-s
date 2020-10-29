import React from 'react'
import InputField from '../../components/Contact/InputField'
import TextField from '../../components/Contact/TextField'

const Contact = () => {
    return (
        <>
            <section className='contact-section'>
                <div className='contact-container'>
                    <h1 className='contact-title'>Kapcsolat</h1>
                    <div className='line' />
                    <p>További kérdése van, részleges tájékoztatásra van szűksége? Írjon nekünk, keresse munkatársainkat!</p>
                    <div className='inputs'>
                        <InputField type='text' placeholder='Vezetéknév'/>
                        <InputField type='text' placeholder='Keresztnév'/>
                        <InputField type='email' placeholder='Email'/>
                        <InputField type='text' placeholder='Rendelés azonosító'/>
                        <TextField placeholder='Üzenet'/>
                        <div><input type='checkbox' className='checkbox' />Elfogadom az <a href='/'>Adatvédelmi Nyilatkozat</a>-ot.</div>
                        <input type='submit' className='btn' value='Küldés'/>
                    </div>
                    

                </div>
                
            </section>
        </>
    )
}

export default Contact
