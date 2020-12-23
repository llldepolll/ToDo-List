import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import { Provider } from 'react-redux';
import configureAppStore, { loadStore, saveStore } from './store/store';

const persistedStore = loadStore();

const store = configureAppStore(persistedStore);

store.subscribe(() => {
  saveStore({
    todos: store.getState().todos,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
