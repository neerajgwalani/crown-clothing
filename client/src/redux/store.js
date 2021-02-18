import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootsaga from '../redux/root-saga';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

const sagaMiddleware=createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootsaga);
export const persistor = persistStore(store);

export default { store, persistStore };
