import React, { Component } from 'react';
import './CharacterExpandedPage.css';
import CommentForm from '../CommentForm/CommentForm';
import { getPetyrData, getDaenerysData, getAryaData, getSansaData } from '../apiCalls';

class CharacterExpandedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterData: {}
        }
    }

    componentDidMount = async () => {
        if (this.props.characterId === '3') {
            let petyrData = await getPetyrData();
            this.setState({
                characterData: petyrData
            })
        }
        if (this.props.characterId === '1') {
            let daenerysData = await getDaenerysData();
            this.setState({
                characterData: daenerysData
            })
        }
        if (this.props.characterId === '8') {
            let aryaData = await getAryaData();
            this.setState({
                characterData: aryaData
            })
        }
        if (this.props.characterId === '7') {
            let sansaData = await getSansaData();
            this.setState({
                characterData: sansaData
            })
        }
    }

    render() {
        // console.log(this.state)
        return (
            <section className= "expanded-main">
                <h1>Character Name: {this.state.characterData.name}</h1>
                <h1>Known Aliases: {this.state.characterData.aliases}</h1> 
                <h1>Given Titles: {this.state.characterData.titles}</h1>
                <h1>Date of Birth: {this.state.characterData.born}</h1>
                <CommentForm />            
            </section>
        )
    }
}

export default CharacterExpandedPage;
