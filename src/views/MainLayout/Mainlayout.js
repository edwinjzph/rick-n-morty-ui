import React, { useContext } from 'react'
import Home from '../home/Home'
import Login from '../login/Login'
import { AuthContext } from '../../store/AuthContext'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function Mainlayout() {
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