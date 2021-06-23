import React, {Component} from 'react';
class Header extends Component {

  render() {
    return (
      <div className="text-left mt10">
        <h1>Toy Block Factory Kata</h1>
        <h3>Welcome to the Toy Block Factory!</h3>
        <div>Please fill out the form to complete the order creation.</div>
      </div>
    )
  }
}

export default Header;