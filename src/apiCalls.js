// multiple url variables for the main houses and characters that I want to pull from?


export const getAllHouses = async () => {
    const response = await fetch("https://anapioficeandfire.com/api/houses/");
    const houses = await response.json();
    return houses
}

export const getAllCharacters = async () => {
    const response = await fetch("https://anapioficeandfire.com/api/characters/");
    const characters = await response.json();
    return characters
}