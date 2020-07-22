import React from 'react';
import './FibonacciForm.css';

/**
 * Component for rendering Fibonacci Form.
 */
class FibonacciForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      this.setState({
        invalid: true,
        displayErrors: true,
      });
      return;
    }

    const form = event.target;
    const data = new FormData(form);

    this.setState({
      res: data,
      invalid: false,
      displayErrors: false,
    });

    fetch('/api/fibonacci/5', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    const { res, invalid, displayErrors } = this.state;
    return (
      <div>
        <h1>Andrew's Fibonacci Calculator</h1>
        <form
          onSubmit={this.handleSubmit}
          noValidate
          className={displayErrors ? 'displayErrors' : ''}
        >
          <label>Fibonacci Digits:</label>
          <input
            id="numDigits"
            name="numDigits"
            type="text"
          />

          <button>Submit</button>
        </form>
        
        <div className="res-block">
          {!invalid && res && (
            <div>
              <h3>Fibonacci Sequence:</h3>
              <pre>{res}</pre>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FibonacciForm;
