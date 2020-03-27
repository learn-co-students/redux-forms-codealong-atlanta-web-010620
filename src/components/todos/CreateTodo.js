import React, { Component } from 'react'
import { connect } from 'react-redux'


class CreateTodo extends Component {
  state={
    text:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault() 
    this.props.addToDo(this.state); 
  }

  render() {
    return(
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <p>
            <label>Add to do </label>
            <input 
              type='text'
              name='text'
              onChange={this.handleChange}

            />
          </p>
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo:formData => dispatch({type:'ADD_TODO', payload:formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
