import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const SideBar = ({isSideBarOpen, setOpen}) => {
    return (
        <>
            <div 
                className={`sidebar ${isSideBarOpen ? 'open' : null}`} 
                onClick={() => setOpen(false)}>
                <FaTimes className='sidebar__icon' onClick={() => setOpen(false)}
                />
                <ul>
                    <li className='sidebar__item'><Link to='/'>főoldal</Link></li>
                    <li className='sidebar__item'><Link to='/products'>édességek</Link></li>
                    <li className='sidebar__item'><Link to='/gyik'>gyik</Link></li>
                    <li className='sidebar__item'><Link to='/contact'>kapcsolat</Link></li>
                </ul>
            </div> 
        </>
    )
}

export default SideBar
