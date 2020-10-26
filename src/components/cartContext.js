import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [ cart, setCart] = useState([])

    function increase (){
        console.log('increse')
    };
    
    return (
        <>
            <CartContext.Provider value={[cart,setCart]}>
                {children}
            </CartContext.Provider>
        </>
    )
}