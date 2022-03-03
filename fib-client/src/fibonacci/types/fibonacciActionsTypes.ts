import { AxiosPromise } from 'axios';

enum f {
  GET_FIBONACCI = 'GET_FIBONACCI',
  GET_FIBONACCI_PENDING = 'GET_FIBONACCI_PENDING',
  GET_FIBONACCI_FULFILLED = 'GET_FIBONACCI_FULFILLED',
  GET_FIBONACCI_REJECTED = 'GET_FIBONACCI_REJECTED',
}

type GetFibonacciResponse = {
  data: string
}

interface GetFibonacci {
  type: typeof f.GET_FIBONACCI;
  payload: AxiosPromise<GetFibonacciResponse>;
}

interface GetFibonacciPending {
  type: typeof f.GET_FIBONACCI_PENDING;
}

interface GetFibonacciFulfilled {
  type: typeof f.GET_FIBONACCI_FULFILLED;
  payload: {
    data: string;
  };
}

interface GetFibonacciRejected {
  type: typeof f.GET_FIBONACCI_REJECTED;
}

type GetFibonacciActions =
  | GetFibonacci
  | GetFibonacciPending
  | GetFibonacciFulfilled
  | GetFibonacciRejected;

export type FibonacciActionTypes = GetFibonacciActions;

export default f;
