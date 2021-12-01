import React from "react";

function ToDo(props) {

    const {todo, index, deleteTodo, editTodo, id} = props;
    
        return (
            <>
                <tr>
                    <th scope="row">{index}</th>
                    <td>{todo.name}</td>
                    <td>
                        <button className="btn btn-info" onClick={() => editTodo(id)}>
                            <i class="far fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-success">
                            <i class="far fa-check-circle"></i>
                        </button>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={() => deleteTodo(index)}>
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            </>
        )
}

export default ToDo;