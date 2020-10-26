import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import { FaBars } from 'react-icons/fa'

const Nav = () => {
    return (
        <>
            <nav>
                <div className='nav-container'>
                    <Logo />
                    <FaBars className='hamburger-icon'/>
                    <Navbar />
                </div>
            </nav>
        </>
    )
}

export default Nav
