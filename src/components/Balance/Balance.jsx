// @ts-nocheck
import React, { Component } from 'react';

class Balance extends Component {
  constructor() {
    super();
    this.state = localStorage.getItem('balance') || 0;
  }
  render() {
    return (
      <div className='flex bg-gray-500 text-white'>
        <p>Balance: {this.state.toString()}</p>
      </div>
    );
  }
}

export default Balance;
