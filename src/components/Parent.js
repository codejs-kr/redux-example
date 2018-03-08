import React, { Component } from 'react';
import '../styles/base.css';
import Child1 from './Child1';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [255, 255, 255]
    };

    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setRandomColor() {
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200)
    ];

    this.setState({
      color: color
    });
  }

  componentDidMount() {
    this.setRandomColor();
  }

  render() {
    const { color } = this.state;
    const { setRandomColor } = this;
    const colorString = `${color[0]}, ${color[1]}, ${color[2]}`;
    const style = {
      background: `rgb(${colorString})`
    };

    return(
      <div id="parent" style={style}>
        <h1>Redux 개념을 돋기 위한 예제 (Parent Component의 색상을 Child에서 변경 합니다.)</h1>
        <Child1 color={colorString} onHandleClick={setRandomColor} />
      </div>
    );
  }
}

export default Parent;
