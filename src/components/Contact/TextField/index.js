import React, { useState } from 'react'

const TextField = ({placeholder}) => {
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
            <div className={`textbox input-container ${focus ? 'focus' : null}`}>
                <textarea 
                    onChange={(e) => setInput(e.target.value)} 
                    value={input}onBlur={() => handleInput()} 
                    onFocus={() => handleInput()} 
                    data-gramm_editor="false" 
                />
                <span 
                    className='textarea-span' 
                    data-placeholder={placeholder}
                />
            </div>
        </>
    )
}

export default TextField
