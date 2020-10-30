import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [isbasketOpen, setBasketOpen] = useState(false)

    const addItem = (product, piece) => {
        const check = cart.some(item =>{
            return item.name === product.name
        })
        if(check){
            setCart(cart.map((item) => {
                if(product.name === item.name) {
                    return {...item, count: item.count + parseInt(piece)}
                }
                return item;
            }))
        }else{
            setCart([...cart, {img: product.image, name: product.name, count: parseInt(piece), price: product.discontedprice}])
        }
        
    }

    const increase = (product) => {
        setCart(cart.map((item) => {
            if(product.name === item.name) {
                return {...item, count: item.count+1}
            }
            return item;
            
        }))
    }

    const decrease = (product) => {
        setCart(cart.map((item) => {
            if(product.name === item.name && item.count > 1) {
                return {...item, count: item.count-1}
            }
            return item;
        }))
    }

    const deleteItem = (product) => {
        setCart(cart.filter((item) => item.name !== product.name))
    }

    const getTotal = () => {
    }

    const providerValue = {
        cart,
        setCart,
        isbasketOpen,
        setBasketOpen,
        addItem,
        decrease,
        increase,
        deleteItem,
        getTotal
    };

    return (
        <>
            <CartContext.Provider value={providerValue}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContext