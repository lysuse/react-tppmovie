import React, { Component } from 'react';
import HomeHeader from './components/home-header';
import Carousel from '@/components/carousel';
import MovieApi from '@/api/movie';
import { MovieList } from '@/components/movie';
import Loading from '@/components/loading';

export default class HomeScreen extends Component {

  state = {
    banners: [
      {
        title: '我的电影时光',
        img: 'https://gw.alicdn.com/tfs/TB169ULzAvoK1RjSZFNXXcxMVXa-1280-520.jpg_720x720Q30s100.jpg',
        link: ''
      },
      {
        title: '廉政风云',
        img: 'https://gw.alicdn.com/tfs/TB1fMb3zZbpK1RjSZFyXXX_qFXa-1280-520.jpg_720x720Q30s100.jpg_.webp',
        link: ''
      }
    ],
    hotPage: {
      pageNo: 1,
      datas: [],
      loadAll: false
    },
    loading: true
  }

  componentDidMount() {
    this.load();
  }

  onScrollHandle = (event) => {
    console.log(event);
  }

  load = async (page = 1) => {
    this.setState({
      loading: true
    });
    const result = await MovieApi.hotMovies(page);
    console.log(result);
    this.setState({
      hotPage: {
        datas: this.state.hotPage.datas.concat(result.subjects),
        loadAll: result.subjects.length <= 0,
        pageNo: page
      },
      loading: false
    });
  }


  render() {
    return (
      <div className='column-start home-page' onTouchMove={this.onScrollHandle}>
        <HomeHeader />
        <Carousel datas={this.state.banners} />
        {!this.state.loading && <MovieList datas={this.state.hotPage.datas} />}
        <Loading loading={this.state.loading} text='加载中...' />
      </div>
    );
  }
}