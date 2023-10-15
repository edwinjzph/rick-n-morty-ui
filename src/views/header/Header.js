import React, { useContext } from 'react'
import Buttonwhite from '../../components/buttonwhite/Buttonwhite'
import "./header.css"
import { AuthContext } from '../../store/AuthContext'

function Header() {
    const { logout, authenticated } = useContext(AuthContext)

    return (
        <div className='header' >
            <div className='header-inner'>
                <div className='header-sub' >
                    <h6 style={{ fontSize: "25px", margin: "0", color: "white" }}>The Rick and Morty</h6>
                </div>
                {authenticated &&
                    <div onClick={() => { logout() }} className='header-sub' >
                        <Buttonwhite text={"Sign out"} />
                    </div>
                }

            </div>

        </div>
    )
}

export default Header