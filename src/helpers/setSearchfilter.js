
const setSearchfilter = (index, arg, filter, search, setSearch, filtervariables) => {
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
    }
}

export default setSearchfilter;