import React, { Component } from 'react';
require('./helloWorld.scss');

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    };
  }

  render() {
    return (
      <div className="full-page-center">
        <h1>Hello, {this.state.name}</h1>
      </div>
    );
  }
}

HelloWorld.propTypes = { name: React.PropTypes.string };
HelloWorld.defaultProps = { name: 'Carlos Corvaia'};

export default HelloWorld;
