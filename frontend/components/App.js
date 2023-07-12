import React from 'react'
import Form from './Form';
import TodoList from './TodoList'





export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      todos: [
        {
          name: 'Organize Garage',
          id: 1, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 2,
          completed: false
        },
        {
          name: 'Work on Fire Pit',
          id: 3,
          completed: false
        },
        {
          name: 'Mow the Grass',
          id: 4,
          completed: false
        }
      ]
    }
  }

  handleClear = (e) => {
    e.preventDefault
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo =>{
        return(todo.completed === false);
      })
    })
  }

  handleAdd = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }



    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
      });
    
  }


handleToggle = (clickedId) => {



this.setState({
  ...this.state,
  todos: this.state.todos.map(todo=> {
    if(todo.id === clickedId) {
      return{
        ...todo,
        completed: !todo.completed
      }
    }
      return todo;
    
  })
});
}


  render() {
    const { todos } = this.state;
    
    return (
      <div>
        <h1>TODO's</h1>
        
        <TodoList  handleToggle={this.handleToggle}  todos={todos}/>
        <form>
          <Form handleAdd={this.handleAdd}/>
          <button onClick={this.handleClear}>Clear</button>
        </form>

          

      </div>
    )
  }
}
