import React, { useState, useRef, useEffect } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const LanguageButton = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [language, setLanguage] = useState('HU')
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
            <div
                className='topbar-button' 
                onClick={() => setMenuOpen(!menuOpen)} 
                ref={wrapperRef}>
                <h1 >{language} {menuOpen ? <FaChevronUp /> : <FaChevronDown />}</h1>
                <div className={`dropdown ${(menuOpen? 'open' : null)}`}>
                    <ul>
                        <li onClick={() => setLanguage('HU')}>HU</li>
                        <li onClick={() => setLanguage('ENG')}>ENG</li>
                        <li onClick={() => setLanguage('GER')}>GER</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default LanguageButton
