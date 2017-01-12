import React, { Component } from 'react'

class Counter extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: parseInt(this.props.initialCount) || 0
    }
  }

  handleClickPlusButton(){
    this.setState({
      count: this.state.count + 1
    });
  }

  render(){
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>{ this.state.count }</h2>
        <button onClick={ () => this.handleClickPlusButton() }>+</button>
      </div>
    )
  }
}

export default Counter