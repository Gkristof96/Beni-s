import React, { useContext } from 'react'
import { ImBin } from 'react-icons/im'
import CartContext from '../../../../contexts/cartContext'

const CartItem = ({item}) => {
    const { increase, decrease, deleteItem } = useContext(CartContext)
    return (
        <>
            <li className='cart-item'>
                <img className='item-img' src={item.img} alt='item.name' />
                <h1 className='item-name'>{item.name}</h1>
                <button 
                    className='item-btn' 
                    onClick={() => decrease(item.id)}
                >-</button>
                <span 
                    className='item-counter' 
                    type='text'>
                    {item.count}
                </span>
                <button 
                    className='item-btn' 
                    onClick={() => increase(item.id)}
                >+</button>
                <ImBin 
                    className='item-icon' 
                    onClick={() => deleteItem(item.id)}
                />
            </li>
        </>
    )
}

export default CartItem
