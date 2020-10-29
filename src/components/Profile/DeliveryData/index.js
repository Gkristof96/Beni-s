import React, { useState } from 'react'
import DeliverySettings from '../DeliverySettings'
import Address from './Address'

const DeliveryData = ({user, setUser, addresses}) => {
    const [isSettingsOpen, setOpen] = useState(false)
    return (
        <>
            <h1>Szállítási címek</h1>
            <div className='delivery-data'>
                {addresses.map((item,i) => <Address item={item} key={i} />)}
                {isSettingsOpen ? <DeliverySettings addresses={addresses} setUser={setUser} user={user} setOpen={setOpen} /> : null }
                {isSettingsOpen ? null : <button onClick={() => setOpen(true)}>Cím hozzáadása</button>}
            </div>
        </>
    )
}

export default DeliveryData
