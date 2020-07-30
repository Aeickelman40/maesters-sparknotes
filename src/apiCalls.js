// multiple url variables for the main houses and characters that I want to pull from?
// limit for only pulling ten at a time? API limit is 10, okay with selecting 10 important characters
// and houses from the 250+ that are available?


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