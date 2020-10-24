import React, {useState, useEffect} from 'react'
import Hero from '../../components/Hero'
import Partners from '../../components/Partners'
import axios from 'axios'
import ProducCard from '../../components/ProductCard'
const Home = () => {
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
                <h1 className='recomended-title'>Ajánlott édességek</h1>
                <div className='products-container'>
                        {currentPost.map((product,i) => (<ProducCard key={i} product={product} />))}
                </div>
                <a className='recomended-btn'>összes édesség</a>
            </section>
            <Partners />
        </>
    )
}

export default Home
