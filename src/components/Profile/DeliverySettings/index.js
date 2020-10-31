import React, { useState } from 'react'
import InputField from '../../Contact/InputField'

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
                    <InputField type='text' placeholder='Vezetéknév'/>
                    <InputField type='text' placeholder='Keresztnév'/>
                    <InputField type='text' placeholder='Utca, házszám'/>
                    <InputField type='text' placeholder='Megjegyzés'/>
                    <InputField type='text' placeholder='Irányítószám'/>
                    <InputField type='text' placeholder='Város'/>
                    <InputField type='text' placeholder='Ország'/>
                    {/*<input name='city' value={input.city} onChange={(e) => setInput({...input, city: e.target.value})}/>
                    <input name='street' value={input.street} onChange={(e) => setInput({...input, street: e.target.value})}/>
                    <input name='other' value={input.other} onChange={(e) => setInput({...input, other: e.target.value})}/>
                    <input name='ir' value={input.ir} onChange={(e) => setInput({...input, ir: e.target.value})}/>
    <input name='country' value={input.country} onChange={(e) => setInput({...input, country: e.target.value})}/>*/}
                    <div className='btn-wrapper'>
                        <button className='btn' onClick={() => setOpen(false)}>Töröl</button>
                        <button className='btn' type='submit'>Mentés</button>
                    </div>
                </form>
                
            </div>
            
        </>
    )
}

export default DeliverySettings
