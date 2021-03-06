import React, { useState } from 'react'

const InputField = ({type, placeholder, name, value, handleChange}) => {
    const [focus, setFocus] = useState(false)

    const handleInput = () => {
        if(value.length > 0) {
            setFocus(true);
        }
        else {
            setFocus(!focus);
        }
    }
    return (
        <>
            <div className={`input-container ${focus && 'focus'}`}>
                <input
                    name={name}
                    onChange={handleChange}
                    value={value}
                    type={type}
                    onBlur={() => handleInput()}
                    onFocus={() => handleInput()}
                    className='input-field'
                />
                <span 
                    className='input-span' 
                    data-placeholder={placeholder} 
                />

            </div>
        </>
    )
}

export default InputField
