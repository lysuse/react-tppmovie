import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './movie-item';
import './movie-list.scss';

export default class MovieList extends Component {
  static propTypes = {
    datas: PropTypes.array
  }
  static defaultProps = {
    datas: []
  }

  state = {  }

  render() {
    return (
      <div className={'column-start movie-list'}>
        {this.props.datas.map(m => <MovieItem key={`movie_${m.id}`} movie={m} />)}
      </div>
    );
  }
}