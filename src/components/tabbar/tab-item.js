import React, { Component } from 'react';
function TabItem(props) {
  return (
    <a className={'column-center-center tab-item ' + (props.active ? 'active' : '')} href={props.href || 'javascript:void(0)'} onClick={props.href ? null : props.onClick}>
      {props.icon && <i className={'tab-item-icon iconfont ' + props.icon}></i>}
      <div className='tab-item-text'>{props.text || ''}</div>
    </a>
  );
}

export default TabItem;