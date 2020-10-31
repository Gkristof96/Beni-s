import React, { useState } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [isbasketOpen, setBasketOpen] = useState(false)

    // termék hozzáadása a kosárhoz (product a termék, piece a hozzáadni kívánt darabszám)
    const addItem = (product, piece) => {
        // megnézzük hogy a kosárba van-e a termék
        const check = cart.some(item =>{
            return item.id === product.id
        })
        // ha igen a darabszámot növeljük
        if(check){
            setCart(cart.map((item) => {
                if(product.id === item.id) {
                    return {...item, count: item.count + parseInt(piece)}
                }
                return item;
            }))
        }
        // ha nem akkor új terméket rakunk a kosárba
        else{
            setCart([...cart, {id: product.id, img: product.image, name: product.name, count: parseInt(piece), price: product.discontedprice}])
        }
        
    }
    // darabszám növelése
    const increase = (id) => {
        setCart(cart.map((item) => {
            if(id === item.id) {
                return {...item, count: item.count+1}
            }
            return item;
            
        }))
    }
    // darabszám csökkentése
    const decrease = (id) => {
        setCart(cart.map((item) => {
            if(id === item.id && item.count > 1) {
                return {...item, count: item.count-1}
            }
            return item;
        }))
    }
    // kosár termék törlő, ha üres a kosár bezárja a fület
    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
        if(cart.length <= 1){
            setBasketOpen(false);
        }
    }

    const providerValue = {
        cart,
        setCart,
        isbasketOpen,
        setBasketOpen,
        addItem,
        decrease,
        increase,
        deleteItem
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