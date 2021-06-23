import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import OrderDetail from './components/OrderDetail'
import InputForm from './components/InputForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fix-middle">
          <Header />
          <InputForm />
          <OrderDetail />
        </div>
      </div>
    )
  }
}

export default App