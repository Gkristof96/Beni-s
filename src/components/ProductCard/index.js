import React, { useContext } from 'react'
import TestContext from '../textContext';

const ProductCard = ({product}) => {
    const {addItem} = useContext(TestContext);
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
                
                <button className='btn' onClick={() => addItem(product)}>kosárba rakom</button>
            </div>
        </>
    )
}

export default ProductCard
