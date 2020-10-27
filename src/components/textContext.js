import React, { useState } from 'react'

export const TestContext = React.createContext();

export const TestProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [total,setTotal] = useState(0)

    const addItem = (product) => {
        const check = cart.some(item =>{
            return item.name === product.name
        })
        if(check){
            console.log('van')
            setCart(cart.map((item) => {
                if(product.name === item.name) {
                    return {...item, count: item.count+1}
                }
            }))
        }else{
            console.log('nincs')
            setCart([...cart, {img: product.image, name: product.name, count: 1, price: product.discontedprice}])
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
        total,
        setCart,
        addItem,
        decrease,
        increase,
        deleteItem,
        getTotal
    };

    return (
        <>
            <TestContext.Provider value={providerValue}>
                {children}
            </TestContext.Provider>
        </>
    )
}

export default TestContext