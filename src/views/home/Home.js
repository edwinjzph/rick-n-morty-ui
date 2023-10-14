import React, { useEffect, useState } from 'react'
import "./home.css"
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Card from '../../components/card/Card';
import setSearchfilter from '../../helpers/setSearchfilter';
import getCharacters from '../../helpers/getCharacters';

function Home() {
    const [characters, setCharacters] = useState({})
    const [search, setSearch] = useState({
        name: "",
        page: 1,
        gender: "",
        species: "",
        status: "",
        type: ""
    })

    const [filtervariables] = useState([{ filter: "alive", arg: "status", selected: false },
    { filter: "dead", arg: "status", selected: false },
    { filter: "unknown", arg: "status", selected: false },
    { filter: "male", arg: "gender", selected: false },
    { filter: "female", arg: "gender", selected: false },
    { filter: "genderless", arg: "gender", selected: false }])

    const handleChangepage = (event, value) => {
        const page = "page"
        setSearch((prevState) => {
            return { ...prevState, [page]: value }
        });
    };

    useEffect(() => {
        getCharacters(setCharacters, search)
    }, [search])

    const handleChange = (e) => {
        const page = "page"
        setSearch((prevState) => {
            return { ...prevState, [page]: 1, [e.target.name]: e.target.value, }
        })
    }

    return (
        <div style={{ width: "100%", marginTop: "100px" }}>

            <div style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
                <div className='search' style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "20px", flexDirection: "column", gap: "10px" }}>
                    <input onChange={handleChange} name="name" placeholder='Search' style={{ width: "80%", padding: "14px", margin: "auto", border: "none", borderRadius: "10px", backgroundColor: "gray", color: "white" }}></input>
                    <div className="scroll" style={{ display: "flex", height: "40px", width: "80%", margin: "auto", gap: "10px", overflowX: "scroll", marginTop: "10px" }}>
                        {filtervariables.map((value, index) => {
                            return (
                                <div key={index} className={`sort ${value.selected && "selected"}`} onClick={() => { setSearchfilter(index, value.arg, value.filter, search, setSearch, filtervariables) }} style={{ background: "black", display: "flex", justifyContent: "center", padding: "10px", borderRadius: "10px", cursor: "pointer", width: "70px", opacity: ".6" }}>
                                    <span style={{ color: "white" }}>{value.filter}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <Grid container spacing={{ xs: 3, md: 3, sm: 3 }} columns={{ xs: 2, sm: 2, md: 8 }}>
                    {Object.keys(characters).length > 0 && Object.values(characters?.results).map((element, index) => {
                        return (
                            <Grid item xs={2} sm={2} md={4} key={index}>
                                <Card element={element} />
                            </Grid>
                        )
                    }
                    )}
                </Grid>

                <div style={{ height: "50px", justifyContent: "center", display: "flex", position: "fixed", bottom: "10px", left: "0", right: "0", backgroundColor: "black", width: "max-content", margin: "auto", borderRadius: "10px" }}>
                    <Pagination count={characters?.info?.pages} onChange={handleChangepage} />
                </div>

            </div>

        </div >
    )
}

export default Home