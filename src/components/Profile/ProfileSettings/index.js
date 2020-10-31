import React, { useState } from 'react'
import InputField from '../../Contact/InputField'
const ProfileSettings = ({ setUser, user, setIsOpen}) => {
    const [input, setInput] = useState({firstname: "", lastname: "", tel: "", email: ""})
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name)
        //setUser({...user, firstname: input.fn, lastname: input.lastname, tel: input.tel, email: input.email})
        setIsOpen(false)
    }
    return (
        <>
            <div className='profile-settings'>
                <form onSubmit={handleSubmit}>
                    <InputField name='lastname' type='text' placeholder='Vezetéknév'/>
                    <InputField name='firstname' type='text' placeholder='Keresztnév'/>
                    <InputField name='tel' type='text' placeholder='Telefonszám'/>
                    <InputField name='email' type='text' placeholder='Email'/>
                    {/*<input name='firstname' value={input.firstname} onChange={(e) => setInput({...input, firstname: e.target.value})} />
                    <input name='lastname' value={input.lastname} onChange={(e) => setInput({...input, lastname: e.target.value})} />
                    <input name='tel' value={input.tel} onChange={(e) => setInput({...input, tel: e.target.value})} />
                    <input name='lastname' value={input.email} onChange={(e) => setInput({...input, email: e.target.value})} />*/}
                    <button className='btn' type="submit">Mentés</button>
                </form>
            </div>
        </>
    )
}

export default ProfileSettings
