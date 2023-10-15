

const getCharacter = async (setSelectedcharacter, selectedid) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${selectedid}`)
    const character = await data.json()
    if (!character?.error) {
        setSelectedcharacter(character)
    } else {
        setSelectedcharacter({})
    }
}

export default getCharacter