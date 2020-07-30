import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import OptionPage from '../optionPage/optionPage';

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
    
  }  

  render() {
    return (
      <div className = "App">
         {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <h1>Sparknotes for Junior Maesters</h1>
          <p>Don't have time to read volumes of old books in Kings Landing?</p>
        <NavLink to={"/optionPage"}>
          <button>Click here to enter!</button>
        </NavLink>
      <Route
        exact path = "/optionPage"
        render={() => <OptionPage />} />
      </div>
    );
  }
}

export default App;
