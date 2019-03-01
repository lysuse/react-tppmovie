import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MainTab from './pages/main';
import MovieDetailScreen from './pages/detail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className={'app-container'}>
          <Route path="/main" component={MainTab} />
          <Route path="/movie/:id" component={MovieDetailScreen} />
        </div>
      </Router>
    );
  }
} 