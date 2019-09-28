import React, { Component } from 'react';
import './App.css';

import moment from 'moment-timezone';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

class App extends Component {
  state = {
    currentTime: new Date(),
  };
  onClick = () => {
    this.setState({ currentTime: new Date() });
  };

  componentDidMount() {
    const currentTime = this.getTimeFromStorage();
    if (currentTime) {
      this.setState({
        currentTime: new Date(moment(currentTime).format('YYYY/MM/DD HH:mm:ss')),
      });
    }
  }

  getTimeFromStorage() {
    try {
      const item = window.localStorage.getItem('selectedDate');
      return item && JSON.parse(item);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Content currentTime={this.state.currentTime} />
        <Footer onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
