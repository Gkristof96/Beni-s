import React, { useContext } from 'react'
import CartContext from '../../contexts/cartContext';
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    const {addItem} = useContext(CartContext);
    return (
        <>
            
                <div className='product-card'>
                    <Link to={`/product?product=${product.id}`}>
                        <div className='new-tag'>új!</div>
                        <img className='product-image' src={product.image} alt={product.name}></img>
                        <h1 className='product-title'>{product.name}</h1>
                        <div className='prices'>
                            <h2 className='discont'>{product.discontedprice} Ft/db</h2>
                            <h2 className='full'>{product.price} Ft/db</h2>
                        </div>
                    </Link>
                    <button 
                        className='btn' 
                        onClick={() => addItem(product,1)}
                        >kosárba rakom
                    </button>
                </div>
            
        </>
    )
}

export default ProductCard
