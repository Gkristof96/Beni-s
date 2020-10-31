import React, { useContext } from 'react'
import CartItem from './CartItem'
import CartContext from '../../../contexts/cartContext'

const Cart = () => {
    
    const {cart,isbasketOpen, setBasketOpen} = useContext(CartContext)
    const handleBasketOpen = () => {
      if(cart.length > 0) {
        setBasketOpen(!isbasketOpen)
      }
    }
    const total = cart.reduce((prev, item) => {
      return prev + (item.price * item.count);
    },0)
    return (
        <>
            <div className='cart'>
                <h1 
                  className='topbar-btn'
                  onClick={() => handleBasketOpen()}>
                  Kosár ({cart.length})
                </h1>
                <div className={`cart-container ${isbasketOpen? 'open' : null}`}>
                  <ul>
                    {cart.map((item,i) => <CartItem key={i} item={item} />)}
                  </ul>
                  <h2 className='total-price'>Teljes ár: {total} Ft</h2>
                </div>
            </div>
            
        </>
    )
}

export default Cart