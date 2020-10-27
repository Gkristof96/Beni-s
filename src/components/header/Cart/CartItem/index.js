import React, { useContext } from 'react'
import { ImBin } from 'react-icons/im'
import { TestContext } from '../../../textContext'

const CartItem = ({item}) => {
    const { increase, decrease, deleteItem } = useContext(TestContext)
    return (
        <>
            <li className='cart-item'>
                <img className='item-img' src={item.img} alt='item.name' />
                <h1 className='item-name'>{item.name}</h1>
                <button className='item-btn' onClick={() => decrease(item)}>-</button>
                <span className='item-count' type='text' >{item.count}</span>
                <button className='item-btn' onClick={() => increase(item)}>+</button>
                <ImBin className='item-icon' onClick={() => deleteItem(item)}/>
                <h1>{item.price}</h1>
            </li>
        </>
    )
}

export default CartItem
