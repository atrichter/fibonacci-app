import { combineReducers } from 'redux';

import fibonacciReducer, { defaultFibonacciState } from './fibonacci/reducer';


export const initialRootState = {
    fibonacci: defaultFibonacciState,
};

const rootReducer = combineReducers({
    fibonacci: fibonacciReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
