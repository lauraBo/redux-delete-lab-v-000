import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
        <div>
      <span>{this.props.name}</span><button onClick={() => this.props.delete(this.props.id)}>DELETE</button>
    </div>
    );
  }
};

export default Band;
