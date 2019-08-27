import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos: [
      {
        id: 1, 
        title: 'Develop react app',
        isComplete: false
      },
      {
        id: 2, 
        title: 'Use material ui',
        isComplete: false
      }
    ]
  }

  toggleTodo = (id) => {
    this.setState({todos: this.state.todos.map(item => {
      if (item.id === id ){
        item.isComplete = !item.isComplete
      }
      return item
    })})

  }

  delTodo = (id) => {
    this.setState({todos: this.state.todos.filter(item => {
      return item.id !== id
    })})
  }


  addTodo = (text) => {
    this.setState({todo: this.state.todos.push(
      {
        id: this.state.todos.length + 1,
        title: text,
        isComplete: false
      }
    )})
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleComplete={this.toggleTodo} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;

