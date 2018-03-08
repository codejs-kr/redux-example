import React, { Component } from 'react';

class Child2 extends Component {
  render() {
    const { color, onHandleClick } = this.props;

    return (
      <div id="child2">
        <p>현재 색상값: {color}</p>
        <button onClick={onHandleClick}>Parent 색상 변경</button>
      </div>
    );
  }
}


export default Child2;
