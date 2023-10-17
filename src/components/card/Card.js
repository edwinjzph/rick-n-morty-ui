import React from 'react'

function Card({ element, setSelectedid, handleClickOpen }) {

  return (
    <div className='card' onClick={() => { setSelectedid(element.id); handleClickOpen() }} style={{ display: "flex", flexDirection: "column", position: "relative", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", borderRadius: "15px", height: "100%", cursor: "pointer" }}>
      <img src={element.image} alt={element.name} style={{ height: "100%", objectFit: "cover", borderRadius: "15px 0 0 15px", width: "50%" }}></img>
      <div style={{ position: "absolute", width: "70%", height: "100%", right: "0", background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)", borderRadius: " 0 15px  15px 0", }}></div>
      <div className='title' style={{ display: "flex", position: "absolute", right: "5%", flexDirection: "column", width: "40%" }}><h4 >{element.name}</h4>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div style={{ height: "8px", width: "8px", background: `${(element.status === 'Alive') ? "green" : "red"}`, borderRadius: "50%" }}></div>
          <h3>{element.status}-{element.species}</h3>
        </div>
        <h5 style={{ color: "gray", margin: "0" }}>Last known location</h5> <h5>{element.location.name}</h5>         <h5 style={{ color: "gray" }}>First seen in</h5>   <h5>{element.origin.name}</h5></div>
    </div>
  )
}

export default Card