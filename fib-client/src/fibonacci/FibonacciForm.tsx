import React, { useState, FormEvent } from 'react';
import { ChangeEventHandler } from 'react';
import { connect } from 'react-redux';

import { getFibonacci } from './actions';
import './styles/FibonacciForm.css';

const mapDispatchToProps = {
  getFibonacci,
};

type Props = typeof mapDispatchToProps;

export function FibonacciForm({ getFibonacci }: Props): JSX.Element {
  const [input, setInput] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const value = e.currentTarget.value.replace(/\D/g, ''); // strip non-numeric
    setInput(value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    input !== '' ? getFibonacci(input) : alert('Must enter a number')
  }

  return (
    <form onSubmit={handleSubmit}> 
      <label>Number of Fibonacci Digits:</label>
      <label className="small">(positive integer only please)</label>
      <input
        id="input"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default connect(null, mapDispatchToProps)(FibonacciForm);
