import React from 'react'
import Hero from '../../components/Hero'
import Pagination from '../../components/Pagination'
import Partners from '../../components/Partners'
import Recomended from '../../components/Recomended'

const Home = () => {
    return (
        <>
            <Hero />
            <Recomended />
            <Pagination />
            <Partners />
        </>
    )
}

export default Home
