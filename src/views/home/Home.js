import React, { useEffect, useState } from 'react'
import "./home.css"
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Card from '../../components/card/Card';
import setSearchfilter from '../../helpers/setSearchfilter';
import getCharacters from '../../helpers/getCharacters';
import Loader from '../loader/Loader';
import Details from '../../components/details/Details';
import getCharacter from '../../helpers/getCharacter';
import { TextField } from '@mui/material';

function Home() {
    const [characters, setCharacters] = useState({})
    const [loading, setLoading] = useState(true)
    const [selectedcharacter, setSelectedcharacter] = useState({})
    const [selectedid, setSelectedid] = useState(1)
    const [opendetails, setOpendetails] = useState(false)
    const [search, setSearch] = useState({
        name: "",
        page: 1,
        gender: "",
        species: "",
        status: "",
        type: ""
    })

    const [filtervariables] = useState([
        { filter: "alive", arg: "status", selected: false },
        { filter: "dead", arg: "status", selected: false },
        { filter: "unknown", arg: "status", selected: false },
        { filter: "male", arg: "gender", selected: false },
        { filter: "female", arg: "gender", selected: false },
        { filter: "genderless", arg: "gender", selected: false },
        { filter: "human", arg: "species", selected: false },
        { filter: "alien", arg: "species", selected: false },
    ])

    const handleChangepage = (event, value) => {
        setSearch((prevState) => {
            return { ...prevState, page: value }
        });
    };

    useEffect(() => {
        setLoading(true)

        getCharacters(setCharacters, search).then(() => {
            setLoading(false)
        })



    }, [search])
    console.log(selectedcharacter)

    useEffect(() => {
        if (opendetails === true) {
            getCharacter(setSelectedcharacter, selectedid)
        }
    }, [selectedid, opendetails])

    const handleChange = (e) => {
        setSearch((prevState) => {
            return { ...prevState, page: 1, [e.target.name]: e.target.value, }
        })
    }
    console.log(opendetails, selectedid)


    return (
        <div className="home" style={{ width: "100%", marginTop: "100px" }}>
            {(opendetails && (Object.keys(selectedcharacter)).length > 0) &&
                <Details selectedcharacter={selectedcharacter} setOpendetails={setOpendetails} setSelectedcharacter={setSelectedcharacter} />
            }


            <div className='home-sub' style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
                <div className='search' style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "20px", flexDirection: "column", gap: "10px" }}>
                    <TextField value={search.name} fullwidth onChange={handleChange} id="outlined-basic" label="Search" variant="outlined" name='name' />
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
                <div style={{ width: "100%", marginBottom: "20px" }}>
                    <div style={{ display: "flex", width: "max-content", alignItems: "center", flexDirection: "column", margin: "auto" }}>
                        <h5 style={{ color: "gray", margin: "0" }}>826 characters</h5>
                        <h5 style={{ color: "gray", margin: "0" }}>Showing {characters?.results && Object.values(characters?.results).length}</h5>
                    </div>
                </div>

                {loading ? <Loader /> :
                    <Grid container spacing={{ xs: 3, md: 3, sm: 3 }} columns={{ xs: 2, sm: 2, md: 8 }}>
                        {Object.keys(characters).length > 0 && Object.values(characters?.results).map((element, index) => {
                            return (
                                <Grid item xs={2} sm={2} md={4} key={index}>
                                    <Card setSelectedid={setSelectedid} setOpendetails={setOpendetails} element={element} />
                                </Grid>
                            )
                        }
                        )}
                    </Grid>}

                <div style={{ height: "50px", justifyContent: "center", display: "flex", position: "fixed", bottom: "25px", left: "0", right: "0", backgroundColor: "black", width: "max-content", margin: "auto", borderRadius: "10px" }}>
                    <Pagination count={characters?.info?.pages} page={search.page} onChange={handleChangepage} />
                </div>

            </div>

        </div >
    )
}

export default Home