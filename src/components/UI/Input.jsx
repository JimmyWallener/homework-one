// @ts-nocheck
import React, { Component } from 'react';

class Input extends Component {
  constructor({ label, value }) {
    super();
    this.value = value;
    this.label = label;
  }
  render() {
    return (
      <>
        <label htmlFor={this.label} className='bg-gray-300 p-1 rounded-sm'>
          {this.label}
        </label>
        <input {...this.value}></input>
      </>
    );
  }
}

export default Input;
