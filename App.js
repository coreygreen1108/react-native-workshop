import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Home from './components/Home';
import Game from './components/Game';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="game" component={Game} title="Game"/>
        </Scene>
      </Router>
    );
  }
}