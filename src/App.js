import './Style.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './component/ToDoList';
import AddTask from './component/AddTask';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      todos : [
          {name: "Python class"},
          {name: "English class"},
          {name: "JavaScript class"},
          {name: "Math class"}
      ],

      todo: {
        name: ""
      }
    };
  }

  onChange = (e) =>{
    e.preventDefault();
    const {value} = e.target;
    const todo = {
      name: value
    };

    this.setState({todo});
  }

  onSubmit =(e) =>{
    e.preventDefault();
    const {todos, todo} = this.state;
    const newTodos = [...todos, todo];
    this.setState({todos: newTodos, todo: {name: ""}});
    alert("Your todo-list has been updated!")
  }

  deleteTodo = (index) =>{
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({todos: newTodos})
  }

  editTodo = () =>{

  }

  render() {
    const {todos, todo} = this.state;
    return (
      <div className="App">
        <div className="container">
            <div>
              <AddTask todo={todo} onSubmit={this.onSubmit} 
              onChange={this.onChange} />
            </div>
            <div>
              <ToDoList todos={todos} deleteTodo={this.deleteTodo} 
              onChange={this.onChange} />
            </div>
        </div>
      </div>
    );
  }

}

export default App;
