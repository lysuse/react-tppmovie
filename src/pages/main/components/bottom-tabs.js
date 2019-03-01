import React, { Component } from 'react';
import {TabBar, TabItem} from '@/components/tabbar';

export default class BottomTabs extends Component {
  state = {
    activeIndex: 0
  }
  componentDidMount() {
    const paths = ['/main/home', '/main/cinema', '/main/mine'];
    this.setState({
      activeIndex: paths.findIndex(s => s === this.props.location.pathname)
    });
  }
  render() {
    return (
      <TabBar>
        <TabItem active={this.state.activeIndex === 0} href='/main/home' icon='icon-movie' text='热映' />
        <TabItem active={this.state.activeIndex === 1} href='/main/cinema' icon='icon-yingyuan' text='影院' />
        <TabItem active={this.state.activeIndex === 2} href='/main/mine' icon='icon-mine' text='我的' />
      </TabBar>
    );
  }
}