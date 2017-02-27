import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Welcome from './containers/Welcome.js';
import Comparer from './containers/Comparer.js';
import reducers from './reducers';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const logger = createLogger();

const store = createStore(
	reducers,
	{},
  // applyMiddleware(thunk, logger)
	applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Welcome} />
  			<Route path="comparing" component={Comparer} />
  		</Route>
  	</Router>
  </Provider>,
  document.getElementById('root')
);
