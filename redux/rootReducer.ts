import { combineReducers } from 'redux';
import blogReducer from './blog/blogReducers';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
