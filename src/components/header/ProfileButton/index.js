import React, { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileButton = ({ setIsLoggedIn}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const wrapperRef = useRef(null);


  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

    const handleClickOutside = (e) => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(e.target)) {
            setMenuOpen(false);
        }
    };
    return (
        <>
            <div className='topbar-button' onClick={() => setMenuOpen(!menuOpen)} ref={wrapperRef}>
                <h1 >John Smith {menuOpen ? <FaChevronUp /> : <FaChevronDown />}</h1>
                <div className={`dropdown ${(menuOpen? 'open' : null)}`}>
                    <ul>
                        <li><Link to='/profile'>Profilom</Link></li>
                        <li>Rendeléseim</li>
                        <li onClick={() => setIsLoggedIn(false)}>Kijelentkezés</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProfileButton
