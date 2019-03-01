import React, { Component } from 'react';
import PullLoader from '@/components/pull-loader';

export default class CinemaScreen extends Component {
  state = {  }
  render() {
    return (
      <div style={{flex: 1, height: '100%'}}>
        <PullLoader>

        </PullLoader>
      </div>
    );
  }
}