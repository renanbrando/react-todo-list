import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import TodoItem from './components/TodoItem'

class App extends Component {
  state = {
    item: {
      id: 1, 
      title: 'Develop react app',
      isComplete: false
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <TodoItem todo={this.state.item} />
      </div>
    );
  }
}

export default App;

