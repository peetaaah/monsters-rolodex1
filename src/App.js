import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    //extends functionality across the different methods, like the componentDidMount

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    // //specific to handleChange!
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  //arrow functions automatically gets lexical binding, i.e. 'this'

  render() {
    // renders any JSX, and gains access to the 'state'
    const { monsters, searchField } = this.state;
    // the above deconstruction is equivalent to 'const monsters = this.state.monsters, and
    // const searchField = this.state.searchField

    // use arrow functions on any class methods you define, and aren't part of React (i,e, render(), componentDidMount())

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      // returns all the JSX as HTML
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="Search Monsters..."
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
