import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { getAllHouses, getAllCharacters } from '../apiCalls';
import WelcomePage from '../WelcomePage/WelcomePage';
import OptionPage from '../OptionPage/OptionPage';
import HousePage from '../HousePage/HousePage';
import CharacterPage from '../CharacterPage/CharacterPage';
import CharacterExpandedPage from '../CharacterExpandedPage/CharacterExpandedPage';
import HouseExpandedPage from '../HouseExpandedPage/HouseExpandedPage';

// import logo from '../images/logo.svg';

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

  render() {
    console.log(this.state)
    return (
      <div className = "App">
         {/* <img src={logo} className="App-logo" alt="logo" />  */}
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
          exact path = "/Characters/:id"
          render={() => <CharacterExpandedPage character={this.state.characters}/>} /> 
        <Route
          exact path = "/Houses/:id"
          render={() => <HouseExpandedPage />} />   
        {/* <Route
          exact path = "/Characters/:id"
          render={( match ) => {
            const { id } = match.params;
            const characterToRender = this.state.characters.find(character => character.id === parseInt(id));
            return <CharacterExpandedPage
                      characterId = {id}
                      {... characterToRender}
             />} 
          }/>  */}

      </div>
    );
  }
}

export default App;

          // <Route 
          //   exact path="/shoe/:id" 
          //   render={({match}) => {
          //     const { id } = match.params;
          //     const shoeToRender = this.state.shoes.find(shoe => shoe.id === parseInt(id));
          //     return <ExpandedShoe
          //               postNewComment={this.postNewComment}
          //               comments={this.state.comments}
          //               addComment={this.addComment}
          //               shoeId ={id}

          //      {...shoeToRender}/>
          //   }}