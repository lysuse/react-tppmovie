import React, { Component } from 'react';
import loadingSvg from '@/assets/images/loading.svg';
import './loading.scss';

function Loading(props) {
  const { loading, text, fullscreen } = props;
  if (!loading) {
    return null;
  }
  const styleObject = {};
  if (fullscreen) {
    styleObject.position = 'fixed';
    styleObject.zIndex = 2;
    styleObject.top = 0;
    styleObject.left = 0;
    styleObject.width = '100%';
    styleObject.height = '100%';
  }
  return (
    <div className={'loading-container'} style={styleObject}>
      <img src={loadingSvg} alt=""/>
      {text && (<div className={'loading-text'}>{text}</div>)}
    </div>
  );
}

export default Loading;