import React, { useState } from 'react'

const DeliverySettings = ({setOpen, user, setUser}) => {
    const [input, setInput] = useState({street: "", other: "", ir: "", city: "", country: ""})
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({...user, addresses: [...user.addresses, {city: input.city, street: input.street, other: input.other, ir: input.ir, country: input.country}]})
        //setUser()
        setOpen(false)
    }
    return (
        <>
            <div className='settings-container'>
                <h1>Új cím</h1>
                <form onSubmit={handleSubmit}>
                    <input name='city' value={input.city} onChange={(e) => setInput({...input, city: e.target.value})}/>
                    <input name='street' value={input.street} onChange={(e) => setInput({...input, street: e.target.value})}/>
                    <input name='other' value={input.other} onChange={(e) => setInput({...input, other: e.target.value})}/>
                    <input name='ir' value={input.ir} onChange={(e) => setInput({...input, ir: e.target.value})}/>
                    <input name='country' value={input.country} onChange={(e) => setInput({...input, country: e.target.value})}/>
                    <button onClick={() => setOpen(false)}>Töröl</button>
                    <button type='submit'>Mentés</button>
                </form>
                
            </div>
            
        </>
    )
}

export default DeliverySettings
