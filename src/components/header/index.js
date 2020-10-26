import React, { useState } from 'react'
import Cart from './Cart'
import LanguageButton from './LanguageButton'
import CurrencyButton from './CurrencyButton'
import LoginButton from './LoginButton'
import ProfileButton from './ProfileButton'

const Header = ({ setVisible}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <>
            <header>
                <div className='top-container'>
                    {isLoggedIn ?  <ProfileButton setIsLoggedIn={setIsLoggedIn} /> : <LoginButton setVisible={setVisible}/>}
                    <Cart/>
                    <LanguageButton />
                    <CurrencyButton  />
                </div>
            </header>
        </>
    )
}

export default Header