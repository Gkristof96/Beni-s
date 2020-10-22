import React from 'react'

const ProductCard = () => {
    return (
        <>
            <div className='product-card'>
                <div className='new-tag'>új!</div>
                <img className='product-image' src='images/products/cocacola.png'></img>
                <h1 className='product-title'>Coca-Cola</h1>
                <div className='prices'>
                    <h2 className='discont'>240Ft/db</h2>
                    <h2 className='full'>290Ft/db</h2>
                </div>
                
                <button className='btn'>kosárba rakom</button>
            </div>
        </>
    )
}

export default ProductCard
