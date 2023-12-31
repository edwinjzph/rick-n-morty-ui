import React, { useContext } from 'react'
import "./header.css"
import { AuthContext } from '../../store/AuthContext'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

function Header({ handleChange, checked }) {
    const { logout, authenticated } = useContext(AuthContext)


    return (
        <div className='header' >
            <div className='header-inner'>
                <div className='header-sub' >
                    <h6 style={{ fontSize: "25px", margin: "0", color: "white" }}>The Rick and Morty</h6>
                </div>
                {authenticated &&
                    <div className='header-sub' >
                        <Button onClick={() => { logout() }} className='mui-button' sx={{ background: "turquoise", color: "black" }} variant="contained">Sign out</Button>
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                }


            </div>

        </div>
    )
}

export default Header