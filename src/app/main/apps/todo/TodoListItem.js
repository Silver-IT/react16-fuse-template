import React from 'react';
import {withStyles, IconButton, Icon, Typography, Checkbox, ListItem} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import _ from '@lodash';
import * as Actions from './store/actions';
import TodoChip from './TodoChip';

const styles = theme => ({
    todoItem: {
        '&.completed': {
            background                    : 'rgba(0,0,0,0.03)',
            '& .todo-title, & .todo-notes': {
                textDecoration: 'line-through'
            }
        }
    }
});

const TodoListItem = ({todo, labels, classes, openEditTodoDialog, toggleImportant, toggleStarred, toggleCompleted}) => {
    return (
        <ListItem
            onClick={(ev) => {
                ev.preventDefault();
                openEditTodoDialog(todo);
            }}
            dense
            button
            className={classNames(classes.todoItem, {"completed": todo.completed}, "border-solid border-b-1 py-16  px-0 sm:px-8")}
        >

            <Checkbox
                tabIndex={-1}
                disableRipple
                checked={todo.completed}
                onChange={() => toggleCompleted(todo)}
                onClick={(ev) => ev.stopPropagation()}
            />

            <div className="flex flex-1 flex-col relative overflow-hidden pl-8">

                <Typography
                    variant="subtitle1"
                    className="todo-title truncate"
                    color={todo.completed ? "textSecondary" : "default"}
                >
                    {todo.title}
                </Typography>

                <Typography
                    color="textSecondary"
                    className="todo-notes truncate"
                >
                    {_.truncate(todo.notes.replace(/<(?:.|\n)*?>/gm, ''), {'length': 180})}
                </Typography>

                <div className={classNames(classes.labels, "flex mt-8")}>
                    {todo.labels.map(label => (
                        <TodoChip
                            className="mr-4"
                            title={_.find(labels, {id: label}).title}
                            color={_.find(labels, {id: label}).color}
                            key={label}
                        />
                    ))}
                </div>
            </div>

            <div className="px-8">
                <IconButton onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    toggleImportant(todo)
                }}>
                    {todo.important ? (
                        <Icon style={{color: red[500]}}>error</Icon>
                    ) : (
                        <Icon>error_outline</Icon>
                    )}
                </IconButton>
                <IconButton onClick={(ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    toggleStarred(todo)
                }}>
                    {todo.starred ? (
                        <Icon style={{color: amber[500]}}>star</Icon>
                    ) : (
                        <Icon>star_outline</Icon>
                    )}
                </IconButton>
            </div>
        </ListItem>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleCompleted   : Actions.toggleCompleted,
        toggleImportant   : Actions.toggleImportant,
        toggleStarred     : Actions.toggleStarred,
        openEditTodoDialog: Actions.openEditTodoDialog
    }, dispatch);
}

function mapStateToProps({todoApp})
{
    return {
        labels: todoApp.labels
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoListItem)));
