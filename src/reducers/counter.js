import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0,
  dummy: 'dumbdumb',
  dumbObject: {
    d: 0,
    u: 1,
    m: 2,
    b: 3
  }
};

// state가 undefined인 경우 initialState를 할당한다.
export default function counter(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    default:
      return state;
  }
}
