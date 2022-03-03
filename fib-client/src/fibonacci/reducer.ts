import f, { FibonacciActionTypes } from './types/fibonacciActionsTypes';
import { FibonacciState } from './types/fibonacciTypes';

export const defaultFibonacciState: FibonacciState = {
    output: '',
};

export default function fibonacciReducer(
    state: FibonacciState = defaultFibonacciState,
    action: FibonacciActionTypes
): FibonacciState {
    switch (action.type) {
        case f.GET_FIBONACCI_PENDING: {
            return { ...state, output: '' };
        }
        case f.GET_FIBONACCI_FULFILLED: {
            return { ...state, output: action.payload.data };
        }
        case f.GET_FIBONACCI_REJECTED: {
            return { ...state, output: 'request failed' };
        }
        default: {
            return state;
        }
    }
}
