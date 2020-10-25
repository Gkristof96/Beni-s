import React, { useState, useEffect, useRef } from 'react'
import CartItem from './CartItem'

const Basket = ({ basket }) => {
    const [productCount, setProductCount] = useState(0);
    const [isbasketOpen, setBasketOpen] = useState(false)
    const wrapperRef = useRef(null);


    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [])
  
      const handleClickOutside = (e) => {
          const { current: wrap } = wrapperRef;
          if (wrap && !wrap.contains(e.target)) {
              setBasketOpen(false);
          }
      };
    return (
        <>
            <div className='basket'>
                <h1 className='basket-btn' onClick={() => setBasketOpen(!isbasketOpen)} ref={wrapperRef}>Kosár ({basket.count})</h1>
                <div className={`basket-container ${isbasketOpen && basket.length > 0 ? 'open' : null}`}>
                  <ul>
                    {basket.map((item,i ) => <CartItem key={i} item={item} />)}
                  </ul>
                </div>
            </div>
            
        </>
    )
}

export default Basket