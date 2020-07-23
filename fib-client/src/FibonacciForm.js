import React from 'react';
import './FibonacciForm.css';

/**
 * Component for rendering Fibonacci Form.
 */
class FibonacciForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numDigits: '',
      res: ''
    };

    this.handleNumDigitsChange = this.handleNumDigitsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.numDigits !== '') {
      const url = '/api/fibonacci/' + this.state.numDigits;

      fetch(url)
        .then(response => response.text())
        .then(text => {this.setState({ res: text})})
        .catch(error => console.log(error));

    } else {
      alert('Must enter a number')
    }
  }

  handleNumDigitsChange(event) {
    const re = /^[0-9]*$/g;  // limit user to only enter numbers
    if (re.test(event.target.value)) {
      this.setState({ numDigits: event.target.value });
    }
  }

  render() {
    return (
      <div className="fibonacciForm">
        <h1>Andrew's Fibonacci Calculator</h1>

        <form onSubmit={this.handleSubmit}> 
          <label>Number of Fibonacci Digits:</label>
          <label className="small">(positive integer only please)</label>
          <input
            id="numDigits"
            type="text"
            value={this.state.numDigits}
            onChange={this.handleNumDigitsChange}
          />
          <button type='submit'>Submit</button>
        </form>

        <div className="results">
          {this.state.res && (
            <div>
              <h3>Fibonacci Sequence:</h3>
              <code>{this.state.res}</code>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FibonacciForm;
