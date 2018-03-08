import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/base.css';
import Child1 from './Child1';

class Parent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color } = this.props;
    const style = {
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    };

    return(
      <div id="parent" style={style}>
        <h1>Redux 개념을 돋기 위한 예제 (Parent Component의 색상을 Child에서 변경 합니다.)</h1>
        <Child1 />
      </div>
    );
  }
}

// redux state 연결 준비
const mapStateToProps = (state) => {
  return {
    color: state.ui.color
  };
};

// 연결
export default connect(mapStateToProps, null)(Parent);
