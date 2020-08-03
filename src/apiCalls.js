// Narrowed down Houses

const baratheon = "https://www.anapioficeandfire.com/api/houses/17";
const lannister = "https://www.anapioficeandfire.com/api/houses/229";
const stark = "https://www.anapioficeandfire.com/api/houses/362";
const targaryen = "https://www.anapioficeandfire.com/api/houses/378";
const tully = "https://www.anapioficeandfire.com/api/houses/395";

const houseArray = [baratheon, lannister, stark, targaryen, tully]

// Narrowed down Characters
const petyrBaelish = "https://www.anapioficeandfire.com/api/characters/823";
const daenerysTargaryen = "https://www.anapioficeandfire.com/api/characters/271";
const aryaStark = "https://anapioficeandfire.com/api/characters/148";
const sansaStark = "https://www.anapioficeandfire.com/api/characters/957";

const characterArray = [petyrBaelish, daenerysTargaryen, aryaStark, sansaStark]

export const getAllCharacters = async () => {
    const responseArray = characterArray.map( async (character) => {
        const response =  await fetch(character);
        const characterData = await response.json();
        return characterData;
    })
    return Promise.all(responseArray)
        .then(data => {
            let characterData = data
            return characterData;
    })
}

export const getAllHouses = async () => {
    const responseArray = houseArray.map( async (house) => {
        const response =  await fetch(house);
        const houseData = await response.json();
        return houseData;
    })
    return Promise.all(responseArray)
        .then(data => {
            let houseData = data
            return houseData;
    })
}

export const postComment = (author, main_text) => {
    return fetch('http://localhost:3001/HouseSelection/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author,
            main_text
        })
    })
}

// Stretch goal to make this more dynamic getHouseData = async (house) => 

export const getBaratheonData = async () => {
    const response = await fetch(baratheon);
    const baratheonHouse = await response.json();
    // console.log(baratheonHouse)
    return baratheonHouse;
}


export const getLannisterData = async () => {
    const response = await fetch(lannister);
    const lannisterHouse = await response.json();
    return lannisterHouse;
}

export const getStarkData = async () => {
    const response = await fetch(stark);
    const starkHouse = await response.json();
    return starkHouse;
}

export const getTargaryenData = async () => {
    const response = await fetch(targaryen);
    const targaryenHouse = await response.json();
    return targaryenHouse;
}

export const getTullyData = async () => {
    const response = await fetch(tully);
    const tullyHouse = await response.json();
    return tullyHouse;
}

export const getPetyrData = async () => {
    const response = await fetch(petyrBaelish);
    const petyrBaelishCharacter = await response.json();
    return petyrBaelishCharacter;
}

export const getDaenerysData = async () => {
    const response = await fetch(daenerysTargaryen);
    const daenerysTargaryenCharacter = await response.json();
    return daenerysTargaryenCharacter;
}

export const getAryaData = async () => {
    const response = await fetch(aryaStark);
    const aryaStarkCharacter = await response.json();
    return aryaStarkCharacter;
}

export const getSansaData = async () => {
    const response = await fetch(sansaStark);
    const sansaStarkCharacter = await response.json();
    return sansaStarkCharacter;
}

