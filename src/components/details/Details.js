import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';


function Details({ selectedcharacter, setOpendetails, setSelectedcharacter }) {
  return (
    <div className="info-main" style={{ position: "fixed", left: "0px", right: "0px", margin: "auto", zIndex: "300", background: "#111", width: "50%", borderRadius: "10px", display: "flex", justifyContent: "top", top: "30%" }}>
      <IconButton style={{ color: "white", position: "absolute", right: "-1%", top: "-2%", padding: "0" }} size='large' onClick={() => { setOpendetails(false); setSelectedcharacter({}); }}>
        <CancelIcon></CancelIcon>
      </IconButton>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "10px", width: "50%" }}>

        <img alt={selectedcharacter.name} style={{ height: "200px", borderRadius: "50%" }} src={selectedcharacter?.image}></img>
        <h3 style={{ color: "white" }}>{selectedcharacter?.name}</h3>

      </div>
      <div className="info" style={{ color: "white", margin: "0" }}>
        <h3 >INFO</h3>
        <h3>Status : {selectedcharacter?.status}</h3>
        <h3>species : {selectedcharacter?.species}</h3>
        <h3>Gender : {selectedcharacter?.gender}</h3>
        <h3>Origin : {selectedcharacter?.origin.name}</h3>
        <h3>Location : {selectedcharacter?.location.name}</h3>
      </div>
    </div>
  )
}

export default Details