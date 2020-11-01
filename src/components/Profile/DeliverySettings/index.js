import React, { useContext } from 'react'
import InputField from '../../Contact/InputField'
import validateAddress from '../../validateAddress'
import useAddress from '../../useAddress'
import AuthContext from '../../../contexts/authContext'

const DeliverySettings = ({setOpen}) => {
    const {user,setUser} = useContext(AuthContext)

    const addAddress = () => {
        setUser({...user, addresses: [...user.addresses, {id: user.addresses.length, firstname: values.firstname, lastname: values.lastname, city: values.city, street: values.street, other: values.other, ir: values.ir, country: values.country}]})
        setOpen(false)
    }
    const { handleChange, handleSubmit, values, errors } = useAddress(
        validateAddress,
        addAddress
    );
    return (
        <>
            <div className='settings-container'>
                <h1>Új cím</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='firstname' value={values.firstname} onChange={handleChange}></input>
                    {errors.firstname && <p>{errors.firstname}</p>}
                    <input type="text" name='lastname' value={values.lastname} onChange={handleChange}></input>
                    {errors.lastname && <p>{errors.lastname}</p>}
                    <input type="text" name='street' value={values.street} onChange={handleChange}></input>
                    {errors.street && <p>{errors.street}</p>}
                    <input type="text" name='other' value={values.other} onChange={handleChange}></input>
                    <input type="text" name='ir' value={values.ir} onChange={handleChange}></input>
                    {errors.ir && <p>{errors.ir}</p>}
                    <input type="text" name='city' value={values.city} onChange={handleChange}></input>
                    {errors.city && <p>{errors.city}</p>}
                    <input type="text" name='country' value={values.country} onChange={handleChange}></input>
                    {errors.country && <p>{errors.country}</p>}
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
