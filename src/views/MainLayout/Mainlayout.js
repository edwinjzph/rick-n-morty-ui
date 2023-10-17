import React, { useContext } from 'react'
import Home from '../home/Home'
import Login from '../login/Login'
import { AuthContext } from '../../store/AuthContext'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



function Mainlayout({ checked }) {
    const darkTheme = createTheme({
        palette: {
            mode: `${checked ? "dark" : "light"}`
        },
    });

    const { authenticated } = useContext(AuthContext)
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div>
                {authenticated ? <Home /> : <Login />}
            </div>
        </ThemeProvider>

    )
}

export default Mainlayout