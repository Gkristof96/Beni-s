import React, { useContext } from 'react'
import { ImBin, ImIndentIncrease } from 'react-icons/im'
import { CartContext } from '../../../cartContext'

const CartItem = ({item}) => {

    const increase = useContext(CartContext)
    return (
        <>
            <li className='cart-item'>
                <img className='item-img' src={item.img} alt='item.name' />
                <h1 className='item-name'>{item.name}</h1>
                <button className='item-btn' onClick={() => increase(23)}>-</button>
                <input className='item-count' type='text'/>
                <button className='item-btn'>+</button>
                <ImBin className='item-icon'/>
            </li>
        </>
    )
}

export default CartItem
