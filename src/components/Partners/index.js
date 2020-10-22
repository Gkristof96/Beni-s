import React from 'react'
import LogoItem from './LogoItem'

const Partners = () => {
    return (
        <>
            <h1>
                Partnerek
            </h1>
            <div className='logo-container'>
                <LogoItem src='images/partners/coca-cola.svg' alt='coca-cola' />
                <LogoItem src='images/partners/hell.svg' alt='hell' />
                <LogoItem src='images/partners/balaton.svg' alt='balaton' />
                <LogoItem src='images/partners/snickers.svg' alt='snickers' />
                <LogoItem src='images/partners/twix.svg' alt='twix' />
            </div>
        </>
    )
}

export default Partners
