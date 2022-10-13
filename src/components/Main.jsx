// @ts-nocheck
import React, { Component } from 'react';
import FormContainer from './FormContainer';
import ExpenseList from './ItemizedList/ExpenseList';

class Main extends Component {
  render() {
    return (
      <main className='flex flex-auto items-center justify-center w-full h-screen'>
        <FormContainer />
        <ExpenseList />
      </main>
    );
  }
}

export default Main;
