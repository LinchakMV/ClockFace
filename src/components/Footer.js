import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CachedIcon from '@material-ui/icons/Cached';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default class Footer extends Component {
  render() {
    return (
      <BottomNavigation
        style={{
          bottom: '0',
          position: 'absolute',
          width: '100%',
          backgroundColor: '#f5f5f5',
        }}
      >
        <BottomNavigationAction label="Recents" icon={<CachedIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<AccessTimeIcon />} />
      </BottomNavigation>
    );
  }
}
