import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import rootReducer from './store/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') );

serviceWorker.unregister();

// const AppStrict = () => {
//   return (
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>
//   );
// };