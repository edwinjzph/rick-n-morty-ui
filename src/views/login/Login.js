import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import "./login.css"
import { Alert, Snackbar } from '@mui/material';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

function Login() {

    const email = useRef()
    const [open, setOpen] = React.useState(["", "success"]);
    const { login } = useContext(AuthContext)
    const [signindata, setSignindata] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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

    console.log(signindata)

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
                <TextField fullwidth ref={email} id="outlined-basic" label="Email" variant="outlined" name='email' value={signindata.email} type='email' onChange={handleChange} />
                <FormControl fullWidth variant="outlined" value={signindata.password}
                    onChange={handleChange}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button onClick={handleSubmit} className='mui-button' sx={{ background: "turquoise" }} variant="contained">Sign in</Button>
            </div>
        </div>
    )
}

export default Login