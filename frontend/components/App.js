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


  render() {
    const { todos } = this.state;
    
    return (
      <div>
        <h1>TODO's</h1>
        
        <TodoList todos={todos}/>
        <form>
          <Form />
          <button>Clear</button>
        </form>

          

      </div>
    )
  }
}
