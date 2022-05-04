import axios from 'axios';

export default axios.create({
  baseURL: 'https://server-back2.herokuapp.com/api/',
});