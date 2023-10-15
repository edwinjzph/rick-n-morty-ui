import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

export const AuthContext = React.createContext({
    authenticated: false,
    login: () => { },
    logout: () => { }
})

export const AuthContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [open, setOpen] = React.useState(["", "success"]);
    const loginHandler = ({
        email,
        password
    }) => {
        if (email !== "" && password !== "") {
            if (email.includes("@") && password.length >= 7) {
                if (email === "test@gmail.com" && password === "12345678") {
                    setOpen(["Login successful", "success"]);
                    setAuthenticated(true)
                }
            } else {
                console.log("Passwords should have 7 characters or email should include @")
                setOpen(["Passwords should have 7 characters or email should include @", "error"]);

            }
        } else {
            console.log("Email or password required")
            setOpen(["Email or password required", "error"]);

        }
    }

    const signout = () => {
        console.log("ncd")
        setAuthenticated((prevState) => {
            return !prevState
        })
        console.log(authenticated)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(["", "success"]);
    };

    return (
        <>
            <Snackbar open={open[0] !== ""} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={open[1]} sx={{ width: '100%' }}>
                    {open[0]}
                </Alert>
            </Snackbar>

            <AuthContext.Provider
                value={{
                    authenticated: authenticated,
                    logout: signout,
                    login: loginHandler,

                }}
            >
                {children}
            </AuthContext.Provider>
        </>



    )

}


