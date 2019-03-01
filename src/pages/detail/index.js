import React, { Component } from 'react';
import MovieApi from '@/api/movie';
import Loading from '@/components/loading';

function SlangText(props) {
  const {num} = props;
  if (!num) {
    return (<span>{props.children}</span>);
  }
  return (
    <span {...props}>{(num > 10000) ? `${(num / 10000).toFixed(1)}万` : (num > 1000 ? `${(num / 1000).toFixed(1)}千`: num.toFixed(1))}{props.children}</span>
  );
}

function MovieHeader({movie}) {
  const intro1Arr = [].concat(movie.genres).concat(movie.countries).concat(movie.durations);
  return (
    <div className={'row-start movie-detail-header'}>
      <div className={'poster'} style={{backgroundImage: `url(${movie.images.medium})`}}></div>
      <div className={'info-content'}>
        <div className={'title-info'}>
          <div className="title">{movie.title}</div>
          <div className="sub-title">{movie.original_title}</div>
        </div>
        <div className="intro-info">
          <div className="intro-text">{intro1Arr.join(' / ')}</div>
          <div className="intro-text">{movie.mainland_pubdate}中国大陆上映</div>
          <div className="intro-text"><SlangText num={movie.wish_count}>人想看</SlangText></div>
        </div>
      </div>
    </div>
  );
}

function MovieRemark({movie}) {
  return (
    <div className={'movie-remark row-between'}>
      <div className={'remark-main column-start'}>
        <div className={'left row-start-center'}>
          <span>{movie.rating.average}</span>
          <div className={'star'} style={{width: `${(movie.rating.average/5/2/5*100)}%`}}></div>
        </div>
        <div className={'remark-bd'}>
          <span className={'remark-title'}>豆瓣评分</span>
          <SlangText className={'grey-text'} num={movie.ratings_count}>人评</SlangText>
        </div>
      </div>
      <div className={'rate-list'}>

      </div>
    </div>
  );
}

function MovieContent({movie}) {
  return (
    <div className={'movie-detail-content'}>
      <MovieRemark movie={movie} />
    </div>
  );
}

export default class MovieDetailScreen extends Component {
  state = {
    movie: {
      images: {},
      genres: [],
      countries: [],
      pubdates: [],
      rating: {
        details: {1:0,2:0,3:0,4:0,5:0}
      }
    },
    loading: true
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.init(movieId);
  }

  init = async (movieId) => {
    const movie = await MovieApi.detail(movieId);
    this.setState({
      movie,
      loading: false
    });
    console.log(movie);
  }

  render() {
    const {movie} = this.state;
    // 19.9元起抢票
    return (
      <div className={'movie-detail'}>
        <div className={'movie-detail-blank'}></div>
        <MovieHeader movie={movie} />
        <MovieContent movie={movie} />
        <a href="#" className={'bottom-button'}>选座购票</a>
        <Loading fullscreen loading={this.state.loading} text='加载中...' />
      </div>
    );
  }
}