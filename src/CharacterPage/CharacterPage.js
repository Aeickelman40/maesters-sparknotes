import React from 'react';
import './CharacterPage.css';
// import { getAllCharacters } from '../apiCalls';
import { NavLink } from 'react-router-dom';

const CharacterPage = ({ characters }) => {
    console.log(characters)
    
    const charMap = characters.map((character) => {
        const charId = character.url.split('').pop();
        return (
            <p>{character.aliases[0]}, {charId}</p>
        ) 
        
    })
    return (
        <section className = "selection-main">
            <NavLink to = {`/Characters/${characters.aliases}`}> 
                <h1>{charMap}</h1>
            </NavLink>
        </section>
    )
}



// class CharacterPage extends Component {
//     constructor(characters) {
//         super(characters);
//         this.state = {
//             name: ''
//         }
//     }

    // componentDidMount = async () => {
    //     try {
    //         const allCharacters = await getAllCharacters();
    //         this.setState({
    //             name: allCharacters.aliases
    //         })
    //     } catch (error) {
    //         this.setState({error: error})
    //     }
    // }
    
//     render() {
//         console.log(this.state)
//         // const charMap = this.state.characters.map((character) => {
//         //     return (
//         //         <p>{character.aliases[0]}</p>
//         //     )  
//         // })
//         return (
//             <section className = "selection-main">
//             {/* <NavLink to = {`/Characters/${this.state.characters.name}`}> */}
//                 {/* <h1>{charMap}</h1> */}
//                 <p>test</p>
//             {/* </NavLink> */}
//         </section>
//     )
// }}

export default CharacterPage;

