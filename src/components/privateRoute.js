import React, { useContext } from 'react'
import AuthContext from '../contexts/authContext'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    const {isLoggedIn} = useContext(AuthContext);
    return (
        <>
            <Route
            {...rest}
            render={() =>
                isLoggedIn ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/"
                    }}
                />
                )
            }
            />
        </>
    )
}

export default PrivateRoute
