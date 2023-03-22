import { AppBar } from '@material-ui/core';
import React from 'react';
import BarSesion from './bar/BarSesion';

const AppNavbar = () => {
  return (
    <AppBar position="static"> 
        <BarSesion></BarSesion>
    </AppBar>
  );
};

export default AppNavbar;