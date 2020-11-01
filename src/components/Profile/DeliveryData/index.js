import React, { useState } from 'react'
import DeliverySettings from '../DeliverySettings'
import Address from './Address'

const DeliveryData = ({user, setUser, addresses}) => {
    const [isSettingsOpen, setOpen] = useState(false)
    return (
        <>
            <div className='delivery-data'>
                {addresses.map((item,i) => <Address item={item} key={i} />)}
                {isSettingsOpen ? <DeliverySettings setOpen={setOpen} /> : null }
                {isSettingsOpen ? null : <button className='btn' onClick={() => setOpen(true)}>Cím hozzáadása</button>}
            </div>
        </>
    )
}

export default DeliveryData
