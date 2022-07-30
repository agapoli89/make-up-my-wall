import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';

import './Nav.scss';

export default function Menu() {

    const [isCategoryListVisible, changeIsCategoryListVisible] = useState(false);
    const dropDownProductCategories = () => changeIsCategoryListVisible(prev => !prev);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    const submenu = <ul className='menu menu__submenu'>
        <li className='menu__submenu-item'>
            <NavLink to='products/living-room'>Do salonu</NavLink>
        </li>
        <li className='menu__submenu-item'>
            <NavLink to='products/kitchen'>Do kuchni</NavLink>
        </li>
        <li className='menu__submenu-item'>
            <NavLink to='products/bedroom'>Do sypialni</NavLink>
        </li>
        <li className='menu__submenu-item'>
            <NavLink to='products/room'>Do pokoju</NavLink>
        </li>
        <li className='menu__submenu-item'>
            <NavLink to='products/office'>Do biura</NavLink>
        </li>
    </ul>

    const menu = (<>
        <ul className='menu'>
            <li className='menu__item'>
                <NavLink to='promotion'>Promocje</NavLink>
            </li>
            <li className='menu__item'>
                <NavLink to='products' onClick={dropDownProductCategories}>Plakaty<MdKeyboardArrowDown className='menu__arrow'/></NavLink>
                {(isCategoryListVisible && !isDesktopOrLaptop) && submenu}
            </li>
            <li className='menu__item'>
                <NavLink to='sets'>Zestawy</NavLink>
            </li>
            <li className='menu__item'>
                <NavLink to='about-us'>O nas</NavLink>
            </li>
            <li className='menu__item'>
                <NavLink to='contact'>Kontakt</NavLink>
            </li>
        </ul>
        {(isCategoryListVisible && isDesktopOrLaptop) && submenu}
    </>)
  
  return menu
}
