// @ts-nocheck
import React, { Component } from 'react';

class ExpenseList extends Component {
  constructor() {
    super();
    this.state =
      localStorage.getItem('expenseList') || [
        { name: 'test', amount: 0, balance: 0 },
      ] ||
      null;
  }
  render() {
    return (
      <>
        {this.state.length > 0 && (
          <ul className='list-none ml-10'>
            {this.state.map((expense, index) => (
              <li key={index} className='flex justify-evenly items-center'>
                <span>{expense.name}</span>
                <span>{expense.amount}</span>
                <span>{expense.balance}</span>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ExpenseList;
