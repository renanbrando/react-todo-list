import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        toggleComplete: PropTypes.func.isRequired,
        delTodo: PropTypes.func.isRequired
    }

    render() {
        return (
            <List>
                {
                    this.props.todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo} />
                    })
                }
            </List>
        )
    }
}
