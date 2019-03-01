import React, { Component } from 'react';

export default class PullLoader extends Component {
  state = {

  }

  onStartPull = (e) => {
    console.log(e);
  }

  onEndPull = (e) => {
    
  }

  render() {
    return (
      <div ref={'pullLoader'} onScroll={this.onStartPull} onTouchStart={this.onStartPull} onTouchMove={this.onStartPull} onTouchEnd={this.onStartPull} style={{flex: 1, height: '100%'}}>

      </div>
    );
  }
}