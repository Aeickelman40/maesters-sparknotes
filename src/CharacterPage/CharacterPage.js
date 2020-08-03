import React from 'react';
import './CharacterPage.css';
// import { getAllCharacters } from '../apiCalls';
import { NavLink } from 'react-router-dom';

const CharacterPage = ({ characters }) => {
    console.log(characters)
    let characterId;
    const charMap = characters.map((character) => {
        characterId = character.url.split('').pop();
        return (
            <NavLink to = {`/CharacterSelection/${characterId}`}
                    id = {characterId}> 
                {/* <h1>{charMap}</h1> */}
                <p>{character.name}, {characterId}</p>
            </NavLink>
        )     
    })
    return (
        <section className = "selection-main">
            <h1>{charMap}</h1>
        </section>
    )
}



// class CharacterPage extends Component {
//     constructor(characters) {
//         super(characters);
//         this.state = {
            
//         }
//     }

//     componentDidMount = () => {
//         this.setState({
//             id: this.charId
//         })
//     }
    
//     render() {
//         console.log(this.state)
//         let charId;
//         const charMap = this.state.map((character) => {
//             charId = character.url.split('').pop();
//             // this.setState({
//             //     id: charId
//             // })
//             return (
//                 <p>{character.aliases[0]}</p>
//             )  
//         })
//         return (
//             <section className = "selection-main">
//             <NavLink to = {`/Characters/${charId}`}> 
//                 <h1>{charMap}</h1>
//                 <p>test</p>
//             </NavLink>
//         </section>
//     )
// }}

export default CharacterPage;

