import React from 'react'

const CartItem = ({item}) => {
    return (
        <>
            <li className='cart-item'>
                <img className='item-img' src={item.img} alt='item.name' />
                <h1 className='item-name'>{item.name}</h1>
                <input className='item-count' type='text' value={item.count}/>
            </li>
        </>
    )
}

export default CartItem
