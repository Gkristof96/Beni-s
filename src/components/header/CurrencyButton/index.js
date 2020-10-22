import React, { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const CurrencyButton = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [currency, setCurrency] = useState('HUF')
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
                <h1 >{currency} {menuOpen ? <FaChevronUp /> : <FaChevronDown />}</h1>
                <div className={`dropdown ${(menuOpen? 'open' : null)}`}>
                    <ul>
                        <li onClick={() => setCurrency('HUF')}>HUF</li>
                        <li onClick={() => setCurrency('USD')}>USD</li>
                        <li onClick={() => setCurrency('EUR')}>EUR</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CurrencyButton
