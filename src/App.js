import './App.css';
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox';
import {robots} from './components/robots'
import { Component } from 'react';

class App extends Component{
  // constructor help to manage state of robots obj and seachinput
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  searchRobots = (event) => {
    this.setState({searchField: event.target.value})
  }

  render(){

    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return(
      <div>
        <header className='header'>
          <h1>ROBOFRIENDS</h1>
        </header>
        <SearchBox searchRobots={this.searchRobots}/>
        <CardList robots={filteredRobots} />
    </div>
    )
  }
}

export default App;
