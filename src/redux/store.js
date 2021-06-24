import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MyReducer from './reducers/MyReducer';

const store = createStore(
  MyReducer,
  applyMiddleware(thunk)
);

export default store;