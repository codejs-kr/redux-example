import { combineReducers } from 'redux'; // 리듀서를 합처준다.
import counter from './counter';
import ui from './ui';

const redusers = combineReducers({
  counter, ui
});

export default redusers;
