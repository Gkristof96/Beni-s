import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Address = ({item}) => {
    return (
        <>
            <div className='address-container'>
                <div className='person-data'>
                    <BsFillPersonFill className='person-data__icon'/>
                    <h1 className='person-data__title'>Nagy Lajos</h1>
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
