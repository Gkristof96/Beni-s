import React, { useState, useContext } from 'react'
import { CartContext } from '../../cartContext'
import CartItem from './CartItem'

const Cart = () => {
    const [isbasketOpen, setBasketOpen] = useState(false)
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <>
            <div className='cart'>
                <h1 className='cart-btn' onClick={() => setBasketOpen(!isbasketOpen)}>Kosár ({cart.length})</h1>
                <div className={`cart-container ${isbasketOpen && cart.length > 0 ? 'open' : null}`}>
                  <ul>
                    {cart.map((item,i) => <CartItem key={i} item={item} />)}
                  </ul>
                  <h2>Teljes ár: {totalPrice} Ft</h2>
                </div>
            </div>
            
        </>
    )
}

export default Cart