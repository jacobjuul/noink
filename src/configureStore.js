import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import noRedInkApp from './reducers';

const logger = createLogger();

const configureStore = () => {
  return createStore(
    noRedInkApp,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
