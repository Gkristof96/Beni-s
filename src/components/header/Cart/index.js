import React, { useState, useContext } from 'react'
import CartItem from './CartItem'
import { TestContext } from '../../textContext' 

const Cart = () => {
    const [isbasketOpen, setBasketOpen] = useState(false)
    const {cart, total} = useContext(TestContext)
    const handleBasketOpen = () => {
      if(cart.length > 0) {
        setBasketOpen(!isbasketOpen)
      }
    }
    return (
        <>
            <div className='cart'>
                <h1 className='cart-btn' onClick={() => handleBasketOpen()}>Kosár ({cart.length})</h1>
                <div className={`cart-container ${isbasketOpen? 'open' : null}`}>
                  <ul>
                    {cart.map((item,i) => <CartItem key={i} item={item} />)}
                  </ul>
                  <h2>Teljes ár: {total} Ft</h2>
                </div>
            </div>
            
        </>
    )
}

export default Cart