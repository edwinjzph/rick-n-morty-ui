import React, { useContext } from 'react'
import Home from '../home/Home'
import Login from '../login/Login'
import { AuthContext } from '../../store/AuthContext'

function Mainlayout() {
    const { authenticated } = useContext(AuthContext)
    return (
        <div>
            {authenticated ? <Home /> : <Login />}
        </div>
    )
}

export default Mainlayout