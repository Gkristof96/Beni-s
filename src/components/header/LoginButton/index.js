import React from 'react'

const LoginButton = ({ setVisible }) => {
    return (
        <>
            <h1 onClick={() => setVisible(true)}>Bejelentkezés</h1>
        </>
    )
}

export default LoginButton