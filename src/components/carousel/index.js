import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Carousel extends Component {
  state = {
    timer: null,
    activeIndex: -1
  }
  static propTypes = {
    datas: PropTypes.array,
    showDots: PropTypes.bool,
    showTitle: PropTypes.bool,
    autoplay: PropTypes.bool,
    delay: PropTypes.number,
    speed: PropTypes.number
  }
  static defaultProps = {
    datas: [],
    showDots: true,
    showTitle: true,
    autoplay: true,
    delay: 3,
    speed: 1
  }

  _renderItem = (item, index) => {
    return (
      <li className='carousel-list-item' key={'carousel_'+index}>
        <a href={item.link || '#'}>
          <img src={item.img} alt={item.title}/>
        </a>
      </li>
    );
  }

  _renderDots = () => {
    const dots = [];
    for (let index = 0; index < this.props.datas.length; index++) {
      dots.push(
        (<span key={'dot_item_'+index} className={'dot-list-item ' + (this.state.activeIndex === index ? 'active' : '')}></span>)
      )
    }
    return (
      <div className='dot-list'>
      {dots}
      </div>
    );
  }
  
  render() {
    return (
      <div className={'carousel ' + (this.props.className || '')} style={this.props.style}>
        <ul className='carousel-list'>
          {this.props.datas.map(this._renderItem)}
        </ul>
        {this._renderDots()}
      </div>
    );
  }
}