import React, { Component } from 'react';

export default class HomeHeader extends Component {
  state = {  }
  render() {
    return (
      <div className={'row-between-center home-header'}>
        <div className={'app-city'}>
          <div className={'city-name'}>成都</div>
          <div className="arrow-down"></div>
        </div>
        <div className={'row-end-center home-header-tab'}>
          <a href="#" className={'tab-item active'}>正在热映</a>
          <a href="#" className={'tab-item'}>即将上映</a>
        </div>
      </div>
    );
  }
}