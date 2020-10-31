import React, { useState } from 'react'

const InputField = ({type, placeholder}) => {
    const [focus, setFocus] = useState(false)
    const [input, setInput] = useState('')

    const handleInput = () => {
        if(input.length > 0) {
            setFocus(true);
        }
        else {
            setFocus(!focus);
        }
    }
    return (
        <>
            <div className={`input-container ${focus ? 'focus' : null}`}>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input} type={type}
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
