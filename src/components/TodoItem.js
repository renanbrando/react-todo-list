import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemText, Checkbox } from '@material-ui/core';

const TodoItem = props => {
    let { id, title, isComplete } = props.todo
    return (
        <ListItem>
            <Checkbox
                checked={isComplete}
                value="isComplete"
                inputProps={{
                'aria-label': 'primary checkbox',
                }}
            />
            <ListItemText primary={title}>
                
            </ListItemText>
        </ListItem>
    )
}

TodoItem.propTypes = {

}

export default TodoItem
