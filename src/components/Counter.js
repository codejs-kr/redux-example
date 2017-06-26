import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
//import { connect, bindActionCreators } from 'react-redux';
import * as actions from '../actions';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setRandomColor() {
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200)
    ];

    this.props.handleSetColor(color);
  }

  render() {
    const color = this.props.color;

    // 정규식을 사용하여 배열값을 대입 할 수 있다. (따옴표 아님)
    // same thing... "rgb('" + color[0] + ... "')"
    const style = {
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    };

    return(
      <div style={style}>
        <Value number={this.props.number} />
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onRandomizeColor={this.setRandomColor}
        />
      </div>
    );
  }
}

// redux state 연결 준비
const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color
  };
}

// redux dispatch 연결 준비
const mapDispatchToProps = (dispatch) => {
  //return bindActionCreators(actions, dispatch);
  // 아래와 같은 결과

  return {
    handleIncrement: () => {
      dispatch(actions.increment());
    },
    handleDecrement: () => {
      dispatch(actions.decrement());
    },
    handleSetColor: (color) => {
      dispatch(actions.setColor(color));
    }
  };
}

// 연결
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
