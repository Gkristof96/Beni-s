import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Nav = () => {
    return (
        <>
            <nav>
                <div className='nav-container'>
                    <Logo />
                    <Navbar />
                </div>
            </nav>
        </>
    )
}

export default Nav
