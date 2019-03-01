import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import Home from './modules/home';
import Cinema from './modules/cinema';
import Mine from './modules//mine';
import BottomTabs from './components/bottom-tabs';

export default class MainTabScreen extends Component {
  state = {  }
  render() {
    return (
      <div className='tab-container-page'>
        <Switch>
          <Route path={`${this.props.match.url}/home`} component={Home}/>
          <Route path={`${this.props.match.url}/cinema`} component={Cinema}/>
          <Route path={`${this.props.match.url}/mine`} component={Mine}/>
        </Switch>
        <BottomTabs {...this.props} />
      </div>
    );
  }
}