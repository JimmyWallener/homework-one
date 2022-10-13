import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className='h-20 bg-black w-full'>
          <img
            className='w-30 h-full'
            src='https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png'
            alt='Grid-Academy'
          />
        </nav>
      </header>
    );
  }
}

export default NavBar;
