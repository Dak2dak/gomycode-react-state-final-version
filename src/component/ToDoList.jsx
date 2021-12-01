import React from 'react';
import ToDo from './ToDo';


const ToDoList = (props) => {

    const {todos, deleteTodo, modifyTodo, markAsDone} = props;
    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Todo</th>
                    <th scope="col">Modify</th>
                    <th scope="col">Done</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => <ToDo todo={todo} 
                index={index} deleteTodo={deleteTodo} modifyTodo={modifyTodo} markAsDone={markAsDone} />)}
            </tbody>
        </table>
        
    )
}

export default ToDoList;