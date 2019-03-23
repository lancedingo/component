import React, { Component } from 'react';

class Project extends Component {
  render() {

    let classes = this.props.someValue.imgName + " portfolio-img" ;

    return(
      <div>
        <h2>{ this.props.someValue.title }</h2>
        <div className={ classes } ></div>
        <p>{ this.props.someValue.description }</p>
      </div>
    )
  }
}

export default Project;
