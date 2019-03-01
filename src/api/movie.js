import $http from '../utils/request';

export default class MovieApi {
  /**
   * 热映电影
   * @param {number} page 
   */
  static async hotMovies(page = 1, city = '成都') {
    const count = 20;
    const start = (page - 1) * count;
    return await $http.get('/in_theaters', {city, start, count});
  }
  /**
   * 即将上映的电影
   * @param {number} page 
   * @param {string} city 
   */
  static async upComingMovies(page = 1, city = '成都') {
    const count = 20;
    const start = (page - 1) * count;
    return await $http.post('/coming_soon', {city, start, count});
  }

  static async detail(id) {
    let movie = await $http.post(`/subject/${id}`);
    const { subject, photos } = await $http.post(`/subject/${id}/photos`);
    return Object.assign({}, movie, subject, {photos})
  }
}