import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [isbasketOpen, setBasketOpen] = useState(false)

    const addItem = (product, piece) => {
        const check = cart.some(item =>{
            return item.id === product.id
        })
        if(check){
            setCart(cart.map((item) => {
                if(product.id === item.id) {
                    return {...item, count: item.count + parseInt(piece)}
                }
                return item;
            }))
        }else{
            setCart([...cart, {id: product.id, img: product.image, name: product.name, count: parseInt(piece), price: product.discontedprice}])
        }
        
    }

    const increase = (product) => {
        setCart(cart.map((item) => {
            if(product.id === item.id) {
                return {...item, count: item.count+1}
            }
            return item;
            
        }))
    }

    const decrease = (product) => {
        setCart(cart.map((item) => {
            if(product.id === item.id && item.count > 1) {
                return {...item, count: item.count-1}
            }
            return item;
        }))
    }

    const deleteItem = (product) => {
        setCart(cart.filter((item) => item.id !== product.id))
        if(cart.length <= 1){
            setBasketOpen(false);
        }
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