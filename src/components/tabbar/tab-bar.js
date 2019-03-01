import React, { Component } from 'react';
function TabBar(props) {
  return (
    <div className={'row-between tab-bar ' + (props.top ? 'tab-bar-top': 'tab-bar-bottom')}>
      {props.children}
    </div>
  );
}

export default TabBar;