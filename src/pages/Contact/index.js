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
                    <InputField />
                </div>
                
            </section>
        </>
    )
}

export default Contact
