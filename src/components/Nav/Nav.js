import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import React from 'react'
import './Nav.scss';

function Nav() {

    const [isMenuVisible, changeIsMenuVisible] = useState(false);
    const [isCategoryListVisible, changeIsCategoryListVisible] = useState(false);

    const dropDownMenu = () => changeIsMenuVisible(prev => !prev);
    const dropDownProductCategories = () => changeIsCategoryListVisible(prev => !prev);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    const submenu = <ul className='menu'>
        <li className='menu__submenu-item'>
            <Link to='products/living-room'>Do salonu</Link>
        </li>
        <li className='menu__submenu-item'>
            <Link to='products/kitchen'>Do kuchni</Link>
        </li>
        <li className='menu__submenu-item'>
            <Link to='products/bedroom'>Do sypialni</Link>
        </li>
        <li className='menu__submenu-item'>
            <Link to='products/room'>Do pokoju</Link>
        </li>
        <li className='menu__submenu-item'>
            <Link to='products/office'>Do biura</Link>
        </li>
    </ul>

    const menu = <ul className='menu'>
    <li className='menu__item'>
        <Link to='promotion'>Promocje</Link>
    </li>
    <li className='menu__item'>
        <Link to='products' onClick={dropDownProductCategories}>Plakaty</Link>
        {isCategoryListVisible && submenu}
    </li>
    <li className='menu__item'>
        <Link to='sets'>Zestawy</Link>
    </li>
    <li className='menu__item'>
        <Link to='about-us'>O nas</Link>
    </li>
    <li className='menu__item'>
        <Link to='contact'>Kontakt</Link>
    </li>
</ul>

  return (
    <nav className='nav'>
        {!isDesktopOrLaptop && <p onClick={dropDownMenu}>|||</p>}
        {isMenuVisible || isDesktopOrLaptop ? menu : null}
    </nav>
  )
}

export default Nav