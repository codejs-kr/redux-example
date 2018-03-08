import React, { Component } from 'react';
import Child2 from './Child2';

class Child1 extends Component {
  render() {
    const { color, onHandleClick } = this.props;

    return (
      <div id="child1">
        <Child2 color={color} onHandleClick={onHandleClick} />
      </div>
    );
  }
}


export default Child1;
