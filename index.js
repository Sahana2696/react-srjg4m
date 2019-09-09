import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import DetailsComponent from './DetailsComponent';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <DetailsComponent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
