import React from 'react';
import './Header.scss';
import logo from '../../images/logo1.png'


export default function Header() {
  return (
    <header>
      <img className='logo'src={logo} alt='logo' />
      <div>cart</div>
      <div>login</div>
      <div>search</div>
    </header>
  )
}
