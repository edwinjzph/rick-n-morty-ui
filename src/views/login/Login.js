import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import "./login.css"
import { Alert, Snackbar } from '@mui/material';

function Login() {

    const email = useRef()
    const [open, setOpen] = React.useState(["", "success"]);
    const { login } = useContext(AuthContext)
    const [signindata, setSignindata] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        setSignindata((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = () => {
        const error = login(signindata)
    }
    useEffect(() => {
        email.current.focus()
    }, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(["", "success"]);
    };

    return (
        <div className='login'>
            <Snackbar open={open[0] !== ""} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={open[1]} sx={{ width: '100%' }}>
                    {open[0]}
                </Alert>
            </Snackbar>
            <div className='login-form'>
                <input style={{ padding: "10px", border: "none", borderRadius: "13px", background: "gray" }} ref={email} name='email' value={signindata.email} placeholder='Enter Email' type='email' onChange={handleChange}></input>
                <input style={{ padding: "10px", border: "none", borderRadius: "13px", background: "gray" }} name='password' value={signindata.password} placeholder='Password' type='password' onChange={handleChange}></input>
                <button onClick={handleSubmit}>Sign in </button>
            </div>
        </div>
    )
}

export default Login