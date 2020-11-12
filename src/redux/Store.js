import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSage from './RootSaga';

import RootReducer from './RootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSage);

export const persistor = persistStore(store);

export default { store, persistStore };
