import React from 'react'
import Todo from './Todo';




class TodoList extends React.Component {
  render(){
   return(
     <ul>
           {
             this.props.todos.map(todos => {
               return (<Todo todos={todos} />)
             })
           }
         </ul>
   )
  }
 }

 export default TodoList
