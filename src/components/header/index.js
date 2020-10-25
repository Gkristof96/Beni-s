import React, { useState } from 'react'
import Basket from './Basket'
import LanguageButton from './LanguageButton'
import CurrencyButton from './CurrencyButton'
import LoginButton from './LoginButton'
import ProfileButton from './ProfileButton'

const Header = ({ setVisible, basket }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <>
            <header>
                <div className='top-container'>
                    {isLoggedIn ?  <ProfileButton setIsLoggedIn={setIsLoggedIn} /> : <LoginButton setVisible={setVisible}/>}
                    <Basket basket={basket} />
                    <LanguageButton />
                    <CurrencyButton  />
                </div>
            </header>
        </>
    )
}

export default Header