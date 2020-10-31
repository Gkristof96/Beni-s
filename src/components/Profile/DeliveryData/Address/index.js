import React, { useContext } from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaMapMarkerAlt, FaTimes } from 'react-icons/fa'
import AuthContext from '../../../../contexts/authContext'

const Address = ({item}) => {
    const {user,setUser} = useContext(AuthContext);

    const handleDelete = (id) => {
        console.log(id)
        setUser({...user, addresses: [...user.addresses.filter((item) => item.id !== id)]})
    }
    return (
        <>
            <div className='address-container'>
                <FaTimes className='delete-icon' onClick={() => handleDelete(item.id)}/>
                <div className='person-data'>
                    <BsFillPersonFill className='person-data__icon'/>
                    <h1 className='person-data__title'>{`${item.lastname} ${item.firstname}`}</h1>
                </div>
                <div className='address-data'>
                    <FaMapMarkerAlt className='address-data__icon'/>
                    <div className='address-data__wrapper'>
                        <h1>{item.street}</h1>
                        <h1>{item.other}</h1>
                        <h1>{`${item.ir}, ${item.city}`}</h1>
                        <h1>{item.country}</h1>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Address
