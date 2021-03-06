import React, { useContext} from 'react'
import Cart from './Cart'
import LanguageButton from './LanguageButton'
import CurrencyButton from './CurrencyButton'
import LoginButton from './LoginButton'
import ProfileButton from './ProfileButton'
import AuthContext from '../../contexts/authContext'
import Authentication from '../Authentication'

const Header = () => {
    const {isLoggedIn, isauthVisible, setVisible} = useContext(AuthContext)
    return (
        <>
            <header>
                <div className='top-container'>
                    {isLoggedIn ?  <ProfileButton/> : <LoginButton setVisible={setVisible}/>}
                    <Cart/>
                    <LanguageButton />
                    <CurrencyButton  />
                    {isauthVisible && <Authentication/>}
                </div>
            </header>
        </>
    )
}

export default Header