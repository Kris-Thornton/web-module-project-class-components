import React from 'react'
import TodoList from './TodoList'

class Form extends React.Component {
constructor() {
  super();
  this.state = {
    input: ''
  }
}
handleSubmit = (e) => {
  e.preventDefault();
  this.props.handleAdd(this.state.input)
  console.log('submit')
}

handleChange = (e) => {
  this.setState({
    ...this.state,
    input: e.target.value
  })
}


  render(){
    return (
    <>
    <input onChange={this.handleChange}/>
    <button onClick={this.handleSubmit}>Add</button><br/>
    
    </>)
  }
}

export default Form
