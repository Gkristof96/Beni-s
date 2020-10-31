import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <>
            <Link to='/' className='logo'>
                <img 
                    className='logo__image' 
                    src='images/lolipop.png' 
                    alt='lolipop'
                />
                <h1 className='logo__title'>Beni's</h1>
            </Link>
        </>
    )
}

export default Logo