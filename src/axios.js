import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN FROM INSTANCE';

export default instance;
