import React, { Component } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

class WithdrawForm extends Component {
  onSubmitHandle = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmitHandle}
        className='mt-5 flex-col flex items-center w-full'
      >
        <Input
          label='Expense Form'
          value={{
            type: 'text',
            placeholder: 'Enter expense description',
            className:
              'w-[40vw] text-center h-8 bg-slate-300 my-5 focus:bg-teal-400 h-5',
          }}
        />
        <Input
          label='Amount'
          value={{
            type: 'number',
            min: 1,
            max: 999999999,
            step: 1,
            placeholder: 'Enter expense amount',
            className:
              'w-[40vw] text-center h-8 bg-slate-300 my-5 focus:bg-teal-400 h-5',
          }}
        />
        <Button
          text='Add Expense'
          value={{
            type: 'submit',
            className:
              'bg-black text-white p-2 uppercase tracking-wide font-bold flex w-[40vw] bg-red-600 justify-center items-center rounded-xl ml-3',
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

export default WithdrawForm;
