import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import reducers from './reducers';

/*
  react-redux 란
  Provider 컴포넌트는 connect() 함수를 사용하여
  해당 컴포넌트가 store의 상태와 dispatch를 매핑하여 사용할 수 있게 반환해 준다.
*/
import { Provider } from 'react-redux';

/*
  redux store 주요 메서드
  1. getState() 를 통해 상태에 접근하게 한다.
  2. dispatch(action) 를 통해 상태를 수정 할 수 있다.
  3. subscribe(listener) 를 통해 리스너를 등록하여 변경을 감지 한다.

  react-redux를 왜 쓰는가?
  - redux store의 내장 메서드만을 사용해서도 구현 할 수 있지만
  - store 상태 값을 사용 관리 하는데의 번거로움을 덜어 준다.

  constructor() { this.state = store.getState() }
  ...

  store.subscribe(() => {
    const currentState = getState();
    this.setState(currentState);
  });
  ...

  componentWillUnmount()시 리스너 해제(unsubscribe)를 신경 쓰지 않아도 된다.
*/

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
