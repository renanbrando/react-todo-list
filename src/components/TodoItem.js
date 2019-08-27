import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const TodoItem = props => {
    let { id, title, isComplete } = props.todo
    return (
        <ListItem>
            <Checkbox
                    checked={isComplete}
                onChange={props.toggleComplete.bind(this, id)}
                value="isComplete"
                inputProps={{
                'aria-label': 'primary checkbox',
                }}
            />
            <ListItemText primary={title} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={props.delTodo.bind(this, id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem
