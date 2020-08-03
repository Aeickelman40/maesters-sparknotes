import React from 'react';
import './CharacterPage.css';
import { NavLink } from 'react-router-dom';


const CharacterPage = ({ characters }) => {
    // console.log(characters)
    const charMap = characters.map((character) => {
        let characterId = character.url.split('').pop();
        console.log(characterId)
        return (
            <NavLink to = {`/CharacterSelection/${characterId}`}
                    id = {characterId}> 
                <p>Character Name: {character.name}</p>
            </NavLink>
        )     
    })
    return (
        <section className = "selection-main">
            <h1
            data-testid="character-selection-render"
            >{charMap}</h1>
        </section>
    )
}

// Attempt at updated the state
// class CharacterPage extends Component {
//     constructor(characters) {
//         super(characters);
//         this.state = {
//             id: 0
//         }
//     }

//     componentDidMount = async () => {
//         try {
//             const allCharacters = await getAllCharacters();
//             this.addIdToCharacterMap();
//             this.setState({
//                 characters: allCharacters,
//                 //  id: this.characterId
//             }) 
//         } catch (error) {
//             this.setState({error: error})
//             }
//     }

//     addIdToCharacterMap = () => {
//         let characterId;
//         const charMap =  this.props.characters.map((character) => {
//             characterId = character.url.split('').pop();
//             this.setState({
//                 id: characterId
//             })
//          return charMap
//         })
//     }
    
//     render() {
//         console.log(this.props)
//         let characterId;
//         const charMap = this.props.characters.map((character) => {
//             characterId = character.url.split('').pop();
//             // this.setState({
//             //     id: characterId
//             // })
//             return (
//                 <section>
//                 <NavLink to = {`/Characters/${characterId}`}> 
//                     <p>{character.name}, {characterId}</p>
//                 </NavLink>
//                 </section>
//             )  
//         })
//         return (
//             <section className = "selection-main">
//                 <h1>{charMap}</h1>
//         </section>
//     )
// }
// }

export default CharacterPage;

