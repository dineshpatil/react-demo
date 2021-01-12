import { Component } from 'react';
import CardList from './card-list/card-list.component';
import { Search } from './search/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleOnSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchString: e.target.value });
  }

  render() {
    const { monsters, searchString } = this.state;
    const filteredList = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters World</h1>
        <Search handleOnSearch={this.handleOnSearch} />
        <CardList monsters={filteredList}>
        </CardList>
      </div>
    );
  }
}

export default App;