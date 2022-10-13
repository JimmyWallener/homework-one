// @ts-nocheck
import React, { Component } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

class DepositForm extends Component {
  constructor({ deposit }) {
    super();
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.deposit = deposit;
  }

  onSubmitHandle = (event) => {
    event.preventDefault();
    this.deposit(event.target.children[1].value);
    event.target.children[1].value = '';
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmitHandle}
        className='mt-5 flex-col flex items-center w-full mb-10'
      >
        <Input
          label='Deposit Form'
          value={{
            name: 'deposit',
            type: 'number',
            min: 1,
            max: 999999999,
            step: 1,
            placeholder: 'Enter amount to deposit',
            className:
              'w-[40vw] text-center h-8 bg-slate-300 my-5 focus:bg-teal-400 h-5',
          }}
        />
        <Button
          text='Add Deposit'
          value={{
            type: 'submit',
            className:
              'bg-black text-white p-2 font-bold tracking-wide uppercase flex w-[40vw] bg-blue-500 justify-center items-center rounded-xl ml-3',
          }}
        />
        <Button
          text='Cancel'
          value={{
            type: 'reset',
            className:
              'bg-black text-white mt-1 p-2 font-bold tracking-wide uppercase flex w-[40vw] bg-black-500 justify-center items-center rounded-xl ml-3',
          }}
        />
      </form>
    );
  }
}

export default DepositForm;
