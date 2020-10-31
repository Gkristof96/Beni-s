import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const GyikItem = ({ question, description}) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='question-container'>
                <div className={`title-bar ${open ? 'open' : ''}`}>
                    <h1 className='title'>{question}</h1>
                    {open ? 
                    <FiMinus 
                        className='gyik-icon' 
                        onClick={() => setOpen(!open)}
                    />
                    : 
                    <FiPlus 
                        onClick={() => setOpen(!open)} 
                        className='gyik-icon'
                    />
                    }
                </div>
                <div className={`dropdown ${open ? 'open' : null}`}>
                    <p>{description}</p>
                </div>
            </div>
            
        </>
    )
}

export default GyikItem
