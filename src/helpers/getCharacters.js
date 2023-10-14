

const getCharacters = async (setCharacters, search) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${search.page.toString()}&name=${search.name}&status=${search.status}&gender=${search.gender}`)
    const characters = await data.json()
    if (!characters?.error) {
        setCharacters(characters)
    } else {
        setCharacters({})
    }
}

export default getCharacters