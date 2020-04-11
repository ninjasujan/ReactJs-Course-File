import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', { className: 'App' }, 'Hi, I am React App')
    );
  }
}

export default App;
