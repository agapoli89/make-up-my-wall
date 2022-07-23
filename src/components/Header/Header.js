import React from 'react';
import './Header.scss';
import logo from '../../images/logo1.png';
import { IconContext } from "react-icons";
import {BsCartFill} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';



export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='logo' />
      <IconContext.Provider value={{className: "icons" }}>
        <BsCartFill />
        <AiOutlineUser/>
      </IconContext.Provider>
      <form>
        <input type="text" id="search"  placeholder="szukaj " autoComplete="off"/>
      </form>
    </header>
  )
}
