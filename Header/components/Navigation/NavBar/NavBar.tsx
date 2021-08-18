import './navbar.scss';
import NavigationItem from '../NavigationItem/NavigationItem';
import React from 'react';

const NavBar = (): JSX.Element => {
  return (
    <ul>
      <NavigationItem exact link={'/'}>
        Home
      </NavigationItem>
      <NavigationItem exact link={'/about'}>
        About
      </NavigationItem>
    </ul>
  );
};

export default NavBar;
