// import ReactDOM from 'react-dom';

/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import {loadPeople} from './actions/dataActions';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(loadPeople(1));

render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App} />
  </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
