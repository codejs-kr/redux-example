import React, { Component } from 'react';
import Child2Container from '../containers/Child2Container';

class Child1 extends Component {
  render() {
    return (
      <div id="child1">
        <Child2Container />
      </div>
    );
  }
}


export default Child1;
