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
          {id: 1, name: "Python class", show: false},
          {id: 2, name: "English class", show: false},
          {id: 3, name: "JavaScript class", show: false},
          {id: 4, name: "Math class", show: false}
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

  onSubmit = (e) =>{
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

  editTodo(id) {
    const newTodos =  [...this.state.todos];
    newTodos.forEach(todo => 
            {if(todo.id === id) {
              todo.show = !todo.show;
        }})
        
        this.setState({ newTodos})
    }

  modifyTodo(id, name) {
    const newTodos = [...this.state.todos];
    newTodos.forEach(todo => {
      if(todo.id === id){
        todo.name = name;
        todo.show = !todo.show;
      }
    })
    this.setState({newTodos});
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
              <ToDoList todos={todos} onChange={this.onChange} 
              editTodo= {this.editTodo} onSubmit={this.modifyTodo} 
              deleteTodo={this.deleteTodo} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
