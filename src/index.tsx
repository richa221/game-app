import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import Game from './containers/game';

ReactDOM.render(
  <Provider store={ configureStore() }>
    <Game/>
  </Provider>,
  document.getElementById('root')
);
