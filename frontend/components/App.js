import React from 'react'

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
        <ul>
          {
            todos.map(todos => {
              return (<li>{todos.name}{ todos.completed?<span> - completed</span>:<span></span>}</li>)
            })
          }
          
        </ul>

        <form>
          <input/>
          <button>Add</button>
          
        </form>

          <button>Clear</button>

      </div>
    )
  }
}
