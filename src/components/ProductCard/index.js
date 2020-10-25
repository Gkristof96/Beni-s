import React from 'react'

const ProductCard = ({product, setBasket, basket}) => {

    const addProduct = (product) => {
        if(basket.includes(product.name)){
            console.log('igen')
        }
        setBasket([...basket, { img: product.image, name: product.name , count: 1, id: Date.now() }])
    }
    return (
        <>
            <div className='product-card'>
                <div className='new-tag'>új!</div>
                <img className='product-image' src={product.image} alt={product.name}></img>
                <h1 className='product-title'>{product.name}</h1>
                <div className='prices'>
                    <h2 className='discont'>{product.price}</h2>
                    <h2 className='full'>{product.discontedprice}</h2>
                </div>
                
                <button className='btn' onClick={() => addProduct(product)}>kosárba rakom</button>
            </div>
        </>
    )
}

export default ProductCard
