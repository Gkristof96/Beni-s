import React, { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const CurrencyButton = () => {
    const [ismenuOpen, setMenuOpen] = useState(false)
    const [currency, setCurrency] = useState('HUF')
    const wrapperRef = useRef(null);

    // kosáron kívül való kattintás eseményfigyelő hozzáadása
    useEffect(() => {
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
            <h1 className='topbar-title'>{currency} {ismenuOpen ? <FaChevronUp /> : <FaChevronDown />}</h1>
              <div className={`dropdown ${ismenuOpen && 'open'}`}>
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
