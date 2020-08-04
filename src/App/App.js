import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { getAllHouses, getAllCharacters, postComment } from '../apiCalls';
import WelcomePage from '../WelcomePage/WelcomePage';
import OptionPage from '../OptionPage/OptionPage';
import HousePage from '../HousePage/HousePage';
import CharacterPage from '../CharacterPage/CharacterPage';
import CharacterExpandedPage from '../CharacterExpandedPage/CharacterExpandedPage';
import HouseExpandedPage from '../HouseExpandedPage/HouseExpandedPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      characters: []
      }
    }

  componentDidMount = async () => {
    try {
      const allHouses = await getAllHouses();
      const allCharacters = await getAllCharacters();
      this.setState({
        houses: allHouses,
        characters: allCharacters
      })
    } catch (error) {
      this.setState({error: error})
    }
  }

  saveComment = (newComment) => {
    this.setState({
      comments: [...this.state.comments, newComment],
    });
    this.addNewComment(newComment);
    };

  addNewComment = async ({ author, main_text }) => {
    postComment(author, main_text)
    .then((response) => response.json())
    .catch((error) => console.log(error))
  } 

  render() {
    // console.log(this.state)
    return (
      <div className = "App">
        <Route 
          exact path = "/"
          render={() => <WelcomePage />} />
        <Route
          exact path = "/OptionPage"
          render={() => <OptionPage />} />
        <Route
          exact path = "/HouseSelection"
          render={() => <HousePage houses={this.state.houses}/>} />
        <Route
          exact path = "/CharacterSelection"
          render={() => <CharacterPage characters={this.state.characters}/>} />  
        <Route
          exact path = "/HouseSelection/:id"
          render={( {match} ) => {
            const { id } = match.params;
            const houseToRender = this.state.houses.find(house => house.houseId === parseInt(id))
            return <HouseExpandedPage
                houseId = {id} 
                comments={this.state.comments}
                saveComment={this.saveComment}
                {... houseToRender} 
          />}  
        }/> 
        <Route
          exact path = "/CharacterSelection/:id"
          render={( {match} ) => {
            const { id } = match.params;
            const characterToRender = this.state.characters.find(character => character.characterId === parseInt(id));            
            return <CharacterExpandedPage
                characterId = {id} 
                comments={this.state.comments}
                saveComment={this.saveComment}
                {... characterToRender} 
          />}  
        }/> 
      </div>
    );
  }
}

export default App;
