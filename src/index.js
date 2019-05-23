import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import skill from './reducer/skill';

const initialState = {
  profile: {
    name: 'BENJAMIN THOMSON',
    role: 'WEB & UX DESIGNER',
    overview:
      'Ultricies nisi voluptatem, illo inventore veritatis ' +
      'et quasi architecto beatae vitae dicta sunt explicabo ' +
      'nemo enim ipsam voluptatem. Sed ut perspiciatis ' +
      'unde omnis iste natus error sit voluptatem ' +
      'accusantium doloremque latu dantium, ' +
      'totam rem aperiam, eaque ipsa quae ' +
      'ab illo tempor dignissim at.',
  },
  skill: {
    wordpress: 50,
    photoshop: 50,
  },
};
const store = createStore(skill, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
