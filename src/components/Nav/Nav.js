import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Menu from './Menu';
import './Nav.scss';

import { IoMenu } from "react-icons/io5";

function Nav() {

    const [isMenuVisible, changeIsMenuVisible] = useState(false);

    const dropDownMenu = () => changeIsMenuVisible(prev => !prev);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    

  return (
    <nav className='nav'>
        {!isDesktopOrLaptop && <div className='nav__icons-box'><IoMenu className='nav__icon' onClick={dropDownMenu}/></div>}
        {isMenuVisible || isDesktopOrLaptop ? <Menu /> : null}
    </nav>
  )
}

export default Nav