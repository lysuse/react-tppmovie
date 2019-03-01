import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie-item.scss';

function MovieItemPoster({movie}) {
  return (
    <div className={'movie-item-poster'}>
      <a href={`/movie/${movie.id}`} style={{
        backgroundImage: `url(${movie.images.medium})`,
        backgroundSize: 'cover'
      }}>
        <i className={'iconfont icon-play'}></i>
      </a>
    </div>
  );
}

function MovieItemContent({movie}) {
  return (
    <a href={`/movie/${movie.id}`} className={'movie-item-content column-start-start'}>
      <div className={'movie-item-content-title'}>{movie.title}</div>
      {movie.rating.average > 0 && <div className={'movie-item-content-score'}>豆瓣评分 <span>{movie.rating.average}</span></div>}
      <div className={'movie-item-content-director'}>导演：{movie.directors.slice(0, 2).map(s => s.name).join(' ')}</div>
      <div className={'movie-item-content-cast'}>主演：{movie.casts.slice(0, 2).map(s => s.name).join(' ')}</div>
    </a>
  );
}


export default class MovieItem extends Component {
  state = {  }
  static propTypes = {
    movie: PropTypes.object
  }
  static defaultProps = {
    movie: {}
  }

  render() {
    const movie = this.props.movie;
    return (
      <div className={'row-between-start movie-item'}>
        <div className={'row-start'}>
          <MovieItemPoster movie={movie} />
          <MovieItemContent movie={movie} />
        </div>
        <div className={'movie-item-actions'}>
          {+(movie.year) === 2018 && <a href={`/movie/${movie.id}`} className={'movie-btn-buy'}>购票</a>}
          {+(movie.year) === 2019 && <a href={`/movie/${movie.id}`} className={'movie-btn-presell'}>预售</a>}
        </div>
      </div>
    );
  }
}