import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configure_store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/course_actions';
import './styles/styles.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
document.getElementById('app')
);
