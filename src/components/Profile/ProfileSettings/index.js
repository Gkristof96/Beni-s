import React, { useState } from 'react'

const ProfileSettings = ({ setUser, user, setIsOpen}) => {
    const [input, setInput] = useState({firstname: "", lastname: "", tel: "", email: ""})
    const handleSubmit = () => {
        setUser({...user, firstname: input.fn, lastname: input.lastname, tel: input.tel, email: input.email})
        setIsOpen(false)
    }
    return (
        <>
            <div className='profile-settings'>
                <form onSubmit={handleSubmit}>
                    <input name='firstname' value={input.firstname} onChange={(e) => setInput({...input, firstname: e.target.value})} />
                    <input name='lastname' value={input.lastname} onChange={(e) => setInput({...input, lastname: e.target.value})} />
                    <input name='tel' value={input.tel} onChange={(e) => setInput({...input, tel: e.target.value})} />
                    <input name='lastname' value={input.email} onChange={(e) => setInput({...input, email: e.target.value})} />
                    <button type="submit">Mentés</button>
                </form>
            </div>
        </>
    )
}

export default ProfileSettings
