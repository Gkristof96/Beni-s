import React, { useContext, useRef, useEffect } from 'react'
import CartItem from './CartItem'
import CartContext from '../../../contexts/cartContext'

const Cart = () => {
    const {cart,isbasketOpen, setBasketOpen} = useContext(CartContext)
    const wrapperRef = useRef(null);

    // kosár nyitás
    const handleBasketOpen = () => {
      if(cart.length > 0) {
        setBasketOpen(!isbasketOpen)
      }
    }
    // teljes összeg számítása
    const total = cart.reduce((prev, item) => {
      return prev + (item.price * item.count);
    },0)

    // kosáron kívül való kattintás eseményfigyelő hozzáadása
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line
    }, [])

    // külső kattintás kezelése
    const handleClickOutside = (e) => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(e.target)) {
            setBasketOpen(false);
        }
    };
    
    return (
        <>
            <div className='cart'>
                <h1 
                  className='topbar-btn'
                  onClick={() => handleBasketOpen()}>
                  Kosár ({cart.length})
                </h1>
                <div className={`cart-container ${isbasketOpen && 'open'}`} ref={wrapperRef}>
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