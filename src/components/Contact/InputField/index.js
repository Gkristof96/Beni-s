import React, { useState } from 'react'

const InputField = ({}) => {
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
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" onBlur={() => handleInput()} onFocus={() => handleInput()}/>
                <span data-placeholder="Password"></span>
            </div>
        </>
    )
}

export default InputField
