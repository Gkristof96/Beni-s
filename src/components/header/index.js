import React, { useState } from 'react'
import Basket from './Basket'
import LanguageButton from './LanguageButton'
import CurrencyButton from './CurrencyButton'
import LoginButton from './LoginButton'
import Navbar from './Navbar'
import Logo from './Logo'
import ProfileButton from './ProfileButton'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <>
            <header>
                <div className='top-container'>
                    {isLoggedIn ?  <ProfileButton /> : <LoginButton />}
                    <Basket />
                    <LanguageButton />
                    <CurrencyButton  />
                </div>
                <div className='nav-container'>
                    <Logo />
                    <Navbar />
                </div>
                
            </header>
        </>
    )
}

export default Header