import React, { useState } from 'react'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn,setLoggedIn] = useState(false)
    const [authVisible, setVisible] = useState(false)
    const [loginActive, setLoginActive] = useState(true)

    const handleLogin = () => {
        setLoggedIn(true)
        setVisible(false)
    }

    const handleLogout = () => {
        setLoggedIn(false)
        setVisible(false)
    }

    const providerValue = {
        isLoggedIn,
        setLoggedIn,
        authVisible,
        setVisible,
        loginActive,
        setLoginActive,
        handleLogin,
        handleLogout
    }
    return (
        <>
            <AuthContext.Provider value={providerValue}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContext