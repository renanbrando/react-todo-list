import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export default class AddTodo extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    state = {
        title: ''
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    addTodo = () => {
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <TextField 
                label="Adicione uma tarefa" 
                variant="filled" 
                value={this.state.title}
                fullWidth
                onChange={this.handleTitleChange}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={this.addTodo}
                        >
                        <AddIcon />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
            />
        )
    }
}
