import React, { useContext } from 'react'
import InputField from '../../Contact/InputField'
import validateAddress from '../../validateAddress'
import useFormAddress from '../../useFormAddress'
import AuthContext from '../../../contexts/authContext'

const DeliverySettings = ({setOpen}) => {
    const {user,setUser} = useContext(AuthContext)

    const addAddress = () => {
        setUser({...user, addresses: [...user.addresses, {
            id: user.addresses.length, 
            firstname: values.firstname, 
            lastname: values.lastname, 
            city: values.city, street: 
            values.street, other: 
            values.other, 
            ir: values.ir, 
            country: values.country
        }]})
        setOpen(false)
    }
    const { handleChange, handleSubmit, values, errors } = useFormAddress(
        validateAddress,
        addAddress
    );
    return (
        <>
            <div className='settings-container'>
                <h1>Új cím</h1>
                <form onSubmit={handleSubmit}>

                    <InputField 
                        name='firstname' 
                        placeholder='Keresztnév' 
                        handleChange={handleChange} 
                        value={values.firstname}
                    />
                    {errors.firstname && <p className='error-message'>{errors.firstname}</p>}
                    
                    <InputField 
                        name='lastname' 
                        placeholder='Vezetéknév' 
                        handleChange={handleChange} 
                        value={values.lastname}
                    />
                    {errors.lastname && <p className='error-message'>{errors.lastname}</p>}

                    <InputField 
                        name='street' 
                        placeholder='Utca, házszám' 
                        handleChange={handleChange} 
                        value={values.street}
                    />
                    {errors.street && <p className='error-message'>{errors.street}</p>}

                    <InputField 
                        name='other' 
                        placeholder='Megjegyzés' 
                        handleChange={handleChange} 
                        value={values.other}
                    />

                    <InputField 
                        name='ir' 
                        placeholder='Irányítószám' 
                        handleChange={handleChange} 
                        value={values.ir}
                    />
                    {errors.ir && <p className='error-message'>{errors.ir}</p>}

                    <InputField 
                        name='city' 
                        placeholder='Város' 
                        handleChange={handleChange} 
                        value={values.city}
                    />
                    {errors.city && <p className='error-message'>{errors.city}</p>}

                    <InputField 
                        name='country' 
                        placeholder='Ország' 
                        andleChange={handleChange} 
                        value={values.country}
                    />
                    {errors.country && <p className='error-message'>{errors.country}</p>}

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
