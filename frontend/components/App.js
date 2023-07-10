import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>TODO's</h1>
        <ul>
          <li>Pick up Groceries</li>
          <li>Do Dishes</li>
          <li>Work on Firepit area</li>
          <li>Mow grass</li>
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
