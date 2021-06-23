import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux'
import App from './App';
import store from './store';

//Prepare a component for the assertion, 
//wrap the code to be rendered and perform the update when act() is called. 
//This will bring the test closer to how React works in the browser.
let container = null;

beforeEach(() => {
  // Create a DOM element as the rendering target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Clean up on exit
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//smoking test
it('renders without crashing', () => {
  render(<Provider store={store}>
    <App />
  </Provider>, container);
});
