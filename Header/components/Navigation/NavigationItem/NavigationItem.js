import './navigation-item.scss';
import React, { ReactChild } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <li className='header__navigation--item'>
      <NavLink
        activeClassName={'header_navigation--item-active'}
        exact={props.exact}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
