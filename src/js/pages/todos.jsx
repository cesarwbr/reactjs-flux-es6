import React from 'react';

import Todo from '../components/todo.jsx';
import * as TodoActions from '../actions/todo-actions';
import TodoStore from '../stores/todo-store';

export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        };
        this.getTodos = this.getTodos.bind(this);
    }

    componentWillMount() {
        TodoStore.on('change', this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListener('change', this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        });

        return (
            <div>
                <button class='btn' onClick={this.reloadTodos.bind(this)}>Reload!</button>
                <input />
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}
