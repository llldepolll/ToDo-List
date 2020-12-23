import rootReducer from './reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const entity = 'myAppStore';

export const saveStore = (store) => {
  const serializedStore = JSON.stringify(store);
  localStorage.setItem(entity, serializedStore);
};

export const loadStore = () => {
  try {
    const serializedState = localStorage.getItem(entity);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const configureAppStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default configureAppStore;
