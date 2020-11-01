import React, { useState } from 'react'
import axios from 'axios'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn,setLoggedIn] = useState(false)
    const [isauthVisible, setVisible] = useState(false)
    const [isloginActive, setLoginActive] = useState(true)
    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)

    
    const handleLogin = () => {
        setLoggedIn(true)
        setVisible(false)
    }

    const handleLogout = () => {
        setLoggedIn(false)
    }

    // user adatok betöltése
    async function fetchUser() {
        await axios
            .get("../data/user.json")
            .then((response) => {
                setUser(response.data);
                setLoading(false)
            })
            .catch((error) => console.log(error));
    }

    const providerValue = {
        isLoggedIn,
        setLoggedIn,
        isauthVisible,
        setVisible,
        isloginActive,
        setLoginActive,
        handleLogin,
        handleLogout,
        fetchUser,
        user,
        setUser,
        isLoading,
        setLoading
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