import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { menuData } from './MenuData';

import './Nav.scss';

export default function Menu(toggleMenu) {

    const [isCategoryListVisible, changeIsCategoryListVisible] = useState(false);
    const dropDownProductCategories = (e) => {
        console.log(e);
        if (e.target.innerText.toLowerCase() === 'plakaty') {
            changeIsCategoryListVisible(prev => !prev);
        } else {
            changeIsCategoryListVisible(false);
            !isDesktopOrLaptop && toggleMenu()
        }
    }

    const closeMenu = () => {
        !isDesktopOrLaptop && toggleMenu()
    }

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    const submenu = (
        <ul className='menu menu__submenu'>
            {menuData.submenuItems.map(submenuItem => (
                <li className='menu__submenu-item' key={submenuItem.id}>
                    <NavLink to={submenuItem.url} onClick={closeMenu}>{submenuItem.description}</NavLink>
                </li>
            ))}
        </ul>
    )

    const menu = (
        <>
            <ul className='menu'>
                {menuData.menuItems.map(menuItem => (
                    <li className='menu__item' key={menuItem.id} onClick={(e) => dropDownProductCategories(e)}>
                        <NavLink to={menuItem.url}>
                            {menuItem.description}
                            {menuItem.id === 2 ? <MdKeyboardArrowDown className='menu__arrow'/> : null}
                        </NavLink>
                        {(isCategoryListVisible && !isDesktopOrLaptop && menuItem.id === 2) && submenu}
                    </li>
                ))}
            </ul>
            {(isCategoryListVisible && isDesktopOrLaptop) && submenu}
        </>
    )
  
  return menu
}
