import axios from 'axios';
import f, { FibonacciActionTypes } from './types/fibonacciActionsTypes';

export function getFibonacci(input: string): FibonacciActionTypes {
    return {
        type: f.GET_FIBONACCI,
        payload: axios.get(`/api/fibonacci/${input}`)
    }
}
