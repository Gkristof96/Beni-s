import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className='navbar'>
                <li className='navbar__item'><Link to='/'>főoldal</Link></li>
                <li className='navbar__item'><Link to='/products'>édességek</Link></li>
                <li className='navbar__item'><Link to='/gyik'>gyik</Link></li>
                <li className='navbar__item'><Link to='/contact'>kapcsolat</Link></li>
            </ul>
        </>
    )
}

export default Navbar