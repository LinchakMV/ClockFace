import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CachedIcon from '@material-ui/icons/Cached';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class Footer extends Component {
  onFavorites() {
    return window.location.assign('https://github.com/LinchakMV/ClockFace');
  }
  render() {
    return (
      <BottomNavigation className="footer">
        <BottomNavigationAction
          label="Current time"
          icon={<CachedIcon />}
          showLabel={true}
          onClick={this.props.onClick}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          onClick={this.onFavorites}
        />
      </BottomNavigation>
    );
  }
}
