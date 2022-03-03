import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../rootReducer';
import FibonacciForm from './FibonacciForm';
import './styles/Fibonacci.css';

type StateProps = {
  output: RootState['fibonacci']['output'];
}

const mapStateToProps = ({ fibonacci }: RootState): StateProps => ({
    output: fibonacci.output
});

type Props = StateProps;

export function Fibonacci({ output }: Props): JSX.Element {
  return (
    <div className="container">
      <h1>Andrew's Fibonacci Calculator</h1>

      <FibonacciForm />

      <div className="results">
        {output !== '' && (
          <div>
            <h3>Fibonacci Sequence:</h3>
            <code>{output}</code>
          </div>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Fibonacci);
