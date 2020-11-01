import React, { useState, useRef, useEffect, useContext} from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AuthContext from '../../../contexts/authContext'


const ProfileButton = () => {
    const {handleLogout, user, fetchUser} = useContext(AuthContext)
    const [ismenuOpen, setMenuOpen] = useState(false)
    const wrapperRef = useRef(null);

    // kosáron kívül való kattintás eseményfigyelő hozzáadása
    useEffect(() => {
        fetchUser()
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line
    }, [])

    // külső kattintás kezelése
    const handleClickOutside = (e) => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(e.target)) {
            setMenuOpen(false);
        }
    };

    return (
        <>
            <div 
                className='topbar-button' 
                onClick={() => setMenuOpen(!ismenuOpen)} 
                ref={wrapperRef}>
                <h1 className='topbar-title'>{`${user.lastname} ${user.firstname}`} {ismenuOpen ? <FaChevronUp /> : <FaChevronDown />}</h1>
                <div className={`dropdown ${(ismenuOpen? 'open' : null)}`}>
                    <ul>
                        <li><Link to='/profile'>Profilom</Link></li>
                        <li>Rendeléseim</li>
                        <li onClick={() => handleLogout()}>Kijelentkezés</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProfileButton
