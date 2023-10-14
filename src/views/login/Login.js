import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import "./login.css"

function Login() {
    const email = useRef()
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
        login(signindata)
    }
    useEffect(() => {
        email.current.focus()
    }, [])
    return (
        <div className='login'>
            <div className='login-form'>
                <input style={{ padding: "10px", border: "none", borderRadius: "13px", background: "gray" }} ref={email} name='email' value={signindata.email} placeholder='Enter Email' type='email' onChange={handleChange}></input>
                <input style={{ padding: "10px", border: "none", borderRadius: "13px", background: "gray" }} name='password' value={signindata.password} placeholder='Password' type='password' onChange={handleChange}></input>
                <button onClick={handleSubmit}>Sign in </button>
            </div>
        </div>
    )
}

export default Login