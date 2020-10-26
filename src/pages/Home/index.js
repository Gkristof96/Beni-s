import React, {useState, useEffect} from 'react'
import Hero from '../../components/Hero'
import Partners from '../../components/Partners'
import axios from 'axios'
import ProductCard from '../../components/ProductCard'
import { Link } from 'react-router-dom'

const Home = ({ setBasket, basket }) => {
    const [products, setProducts] = useState([])
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

    const currentPost = products.slice(0, 6);
    return (
        <>
            <Hero />
            <section className='recomended-section'>
                <div className='recomended-container'>
                    <h1 className='recomended-title'>Ajánlott édességek</h1>
                    <div className='products-container'>
                            {currentPost.map((product,i) => (<ProductCard setBasket={setBasket} basket={basket} key={i} product={product} />))}
                    </div>
                    <Link to='products' className='recomended-btn'>összes édesség</Link>
                </div>
            </section>
            <Partners />
        </>
    )
}

export default Home
