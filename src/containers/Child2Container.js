import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Child2 from '../components/Child2';

class Child2Container extends Component {
  constructor(props) {
    super(props);

    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setRandomColor() {
    const { handleSetColor } = this.props;
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200)
    ];

    handleSetColor(color);
  }

  render() {
    const { color } = this.props;
    const { setRandomColor } = this;

    return(
      <Child2
        color={`${color[0]}, ${color[1]}, ${color[2]}`}
        onHandleClick={setRandomColor}
      />
    );
  }
}

// redux state 연결 준비
const mapStateToProps = (state) => {
  return {
    color: state.ui.color
  };
};

// redux dispatch 연결 준비
const mapDispatchToProps = (dispatch) => {
  return {
    handleSetColor: (color) => {
      dispatch(actions.setColor(color));
    }
  };
};

// 연결
export default connect(mapStateToProps, mapDispatchToProps)(Child2Container);
