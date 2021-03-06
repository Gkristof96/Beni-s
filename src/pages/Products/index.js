import React, { useState, useEffect } from 'react'
import Pagination from '../../components/Pagination'
import ProducCard from '../../components/ProductCard'
import Search from '../../components/Hero/Search'
import axios from 'axios'

const Products = ({basket, setBasket}) => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1);

    const paginate = (pageNumber) => {
        if (!(pageNumber < 1 || pageNumber > numberOfPages)) {
        setCurrentPage(pageNumber);
        } else {
        }
    };

    async  function fetchProducts() {
        await axios
            .get("../data/products.json")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchProducts();
    },[])

    // lapozáshoz szükséges adatok kiszámítása
    const numberOfPages = products.length / 6;
    const indexOfLastPost = currentPage * 6;
    const indexOfFirstPost = indexOfLastPost - 6;
    const currentPost = products.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
            <section className='white-header'>
                    <h2 className='home-title'>Főoldal</h2>
                    <h1 className='products-title'>Édességek</h1>
                    <Search
                        search={search}
                        setSearch={setSearch}
                        placeholder="Keress az édességek között!"
                        type="text"
                    />
            </section>
            <section className='products-section'>
                <div className='products-container'>
                    
                    <div className='products-wrapper'>
                        {currentPost.map((product,i) => (
                            <ProducCard 
                                key={i} 
                                basket={basket} 
                                setBasket={setBasket} 
                                product={product} 
                            />
                        ))}
                    </div>
                    <div className='pagination-wrapper'>
                        <Pagination
                            totalPosts={products.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </section>
            
          
        </>
    )
}

export default Products
