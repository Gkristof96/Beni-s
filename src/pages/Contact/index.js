import React from 'react'
import InputField from '../../components/Contact/InputField'

const Contact = () => {
    return (
        <>
            <section>
                <div className='contact-container'>
                    <h1 className='contact-title'>Kapcsolat</h1>
                    <div className='line' />
                    <p>További kérdése van, részleges tájékoztatásra van szűksége? Írjon nekünk, keresse munkatársainkat!</p>
                    <div className='inputs'>
                        <InputField type='text' placeholder='Vezetéknév'/>
                        <InputField type='text' placeholder='Keresztnév'/>
                        <InputField type='email' placeholder='Email'/>
                        <InputField type='text' placeholder='Rendelés azonosító'/>
                    </div>
                    

                </div>
                
            </section>
        </>
    )
}

export default Contact
