import React from 'react';
import './CharacterPage.css';
// import { getAllCharacters } from '../apiCalls';
import { NavLink } from 'react-router-dom';

const CharacterPage = ({ characters }) => {
    console.log(characters)
    let charId;
    const charMap = characters.map((character) => {
        charId = character.url.split('').pop();
        return (
            <p>{character.name}, {charId}</p>
        )     
    })
    return (
        <section className = "selection-main">
            <NavLink to = {`/Characters/${charId}`}> 
                <h1>{charMap}</h1>
            </NavLink>
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

