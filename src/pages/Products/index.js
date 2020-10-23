import React, { useState } from 'react'
import Pagination from '../../components/Pagination';


const Products = () => {
    const [products, setProducts] = useState({})

    const [currentPage, setCurrentPage] = useState(1);
    const paginate = (pageNumber) => {
        if (!(pageNumber < 1 || pageNumber > numberOfPages)) {
        setCurrentPage(pageNumber);
        } else {
        }
    };

    const numberOfPages = products.length / 6;
    const indexOfLastPost = currentPage * 6;
    const indexOfFirstPost = indexOfLastPost - 6;
    {/*const currentPost = products.slice(indexOfFirstPost, indexOfLastPost);*/}
    return (
        <>
            <div className='products'>
                {/*{currentPost.map((product) => (<h1>product</h1>))}*/}
            </div>
            <Pagination />
        </>
    )
}

export default Products
