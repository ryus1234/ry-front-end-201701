import React from 'react'

class Button extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={ this.props.styleBtton }>
        { this.props.children }
      </div>
    );
  }
}

export default Button