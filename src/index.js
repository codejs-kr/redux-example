import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

/*
1. dispatch(action)
2. getState()
3. subscribe(listener)
4. replaceReducer(nextReducer) 잘 사용 안함
*/
const store = createStore(reducers);

ReactDOM.render(
  // Provider로 감싼후 store를 정보를 사용하도록 한다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
