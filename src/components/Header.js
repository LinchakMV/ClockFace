import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

export default class Header extends Component {
  render() {
    return (
      <AppBar position="static" className="header">
        <MenuIcon />
      </AppBar>
    );
  }
}
