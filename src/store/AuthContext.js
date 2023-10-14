import React, { useState } from 'react';


export const AuthContext = React.createContext({
    authenticated: false,
    login: () => { },
    logout: () => { }
})

export const AuthContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const loginHandler = ({
        email,
        password
    }) => {
        setAuthenticated(true)
        if (email !== "" && password !== "") {
            setAuthenticated(true)
            if (email.includes("@") && password.length >= 7) {
                setAuthenticated(true)
            } else {
                console.log("Passwords should have 7 characters or email should include @")
            }
        } else {
            console.log("Email or password required")
        }
    }

    const signout = () => {
        console.log("ncd")
        setAuthenticated((prevState) => {
            return !prevState
        })
        console.log(authenticated)
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: authenticated,
                logout: signout,
                login: loginHandler,

            }}
        >
            {children}
        </AuthContext.Provider>
    )

}


