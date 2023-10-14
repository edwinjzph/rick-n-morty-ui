import React, { useEffect, useState } from 'react'
import "./home.css"
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';



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
    const [filtervariables] = useState([{ filter: "alive", arg: "status", selected: false }, { filter: "dead", arg: "status", selected: false }, { filter: "unknown", arg: "status", selected: false }, { filter: "male", arg: "gender", selected: false }, { filter: "female", arg: "gender", selected: false }, { filter: "genderless", arg: "gender", selected: false }])
    const handleChangepage = (event, value) => {
        const page = "page"
        setSearch((prevState) => {
            return { ...prevState, [page]: value }
        });
    };


    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${search.page.toString()}&name=${search.name}&status=${search.status}&gender=${search.gender}`)
            const characters = await data.json()
            if (!characters?.error) {
                setCharacters(characters)
            } else {
                setCharacters({})
            }

        }
        getData()
    }, [search])

    const handleChange = (e) => {
        const page = "page"
        setSearch((prevState) => {
            return { ...prevState, [page]: 1, [e.target.name]: e.target.value, }
        })
    }

    const setSearchfilter = (index, arg, filter) => {
        filtervariables[index]["selected"] = !filtervariables[index]["selected"]
        let flag = false;
        filtervariables.forEach((value, index2) => {
            if (index !== index2 && value.arg === arg) {
                value.selected = false
            }

            if (filter === search[arg] && filtervariables[index]["selected"] === false) {
                setSearch((prevState) => {
                    return { ...prevState, [filtervariables[index].arg]: "" }
                })
            } else {
                setSearch((prevState) => {
                    return { ...prevState, [filtervariables[index].arg]: filtervariables[index].filter }
                })

            }
            if (value.selected === true) {
                flag = true
            }
        })
        if (flag === false) {
            setSearch({
                name: "",
                page: 1,
                gender: "",
                species: "",
                status: "",
                type: ""
            })
        } else {

        }

    }


    return (
        <div style={{ width: "100%", marginTop: "100px" }}>

            <div style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
                <div className='search' style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "20px", flexDirection: "column", gap: "10px" }}>
                    <input onChange={handleChange} name="name" placeholder='Search' style={{ width: "80%", padding: "14px", margin: "auto", border: "none", borderRadius: "10px", backgroundColor: "gray", color: "white" }}></input>
                    <div className="scroll" style={{ display: "flex", height: "40px", width: "80%", margin: "auto", gap: "10px", overflowX: "scroll", marginTop: "10px" }}>
                        {filtervariables.map((value, index) => {
                            return (
                                <div key={index} className={`sort ${value.selected && "selected"}`} onClick={() => { setSearchfilter(index, value.arg, value.filter) }} style={{ background: "black", display: "flex", justifyContent: "center", padding: "10px", borderRadius: "10px", cursor: "pointer", width: "70px", opacity: ".6" }}>
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
                                <div className='card' style={{ display: "flex", flexDirection: "column", position: "relative", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,rgba(0, 0, 0, 0.06) 0px 2px 4px -1px", borderRadius: "15px", height: "100%" }}>
                                    <img src={element.image} alt={element.name} style={{ height: "100%", objectFit: "cover", borderRadius: "15px 0 0 15px", width: "50%" }}></img>
                                    <div style={{ position: "absolute", width: "70%", height: "100%", right: "0", background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)", borderRadius: " 0 15px  15px 0", }}></div>
                                    <div className='title' style={{ display: "flex", position: "absolute", right: "5%", flexDirection: "column", width: "40%" }}><h4 >{element.name}</h4>
                                        <h3>{element.status}-{element.species}</h3>
                                        <h5 style={{ color: "gray" }}>Last known location</h5> <h5>{element.location.name}</h5>         <h5 style={{ color: "gray" }}>First seen in</h5>   <h5>{element.origin.name}</h5></div>

                                </div>
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