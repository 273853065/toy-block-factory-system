import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './container/Header'
import OrderReport from './container/OrderReport'
import InputForm from './container/InputForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fix-middle">
          <Header />
          <InputForm />
          <OrderReport />
        </div>
      </div>
    )
  }
}

export default App