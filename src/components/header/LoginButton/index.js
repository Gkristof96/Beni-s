import React from 'react'

const LoginButton = ({ setVisible }) => {
    return (
        <>
            <h1 className='topbar-title' onClick={() => setVisible(true)}>Bejelentkezés</h1>
        </>
    )
}

export default LoginButton