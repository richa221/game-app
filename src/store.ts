import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { compose } from "redux";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
export default function configureStore() {
  return createStore(
    rootReducer
  );
}
