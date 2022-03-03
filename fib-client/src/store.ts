import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export const middleware = applyMiddleware(promise, thunk);

export default createStore(rootReducer, composeWithDevTools(middleware));
