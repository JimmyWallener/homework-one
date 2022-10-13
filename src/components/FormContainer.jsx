// @ts-nocheck
import React, { Component } from 'react';
import Balance from './Balance/Balance';
import DepositForm from './Deposit/DepositForm';
import WithdrawForm from './Withdraw/WithdrawForm';

class FormContainer extends Component {
  newDeposit = (deposit) => {
    console.log(deposit);
  };

  render() {
    return (
      <div className='flex flex-col w-[40%]'>
        <Balance />
        <DepositForm deposit={this.newDeposit} />
        <hr className='border-black' />
        <WithdrawForm />
      </div>
    );
  }
}

export default FormContainer;
