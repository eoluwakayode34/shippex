import axios from 'axios';

export const requestInstance = axios.create({
  baseURL: 'https://shippex-demo.bc.brandimic.com/api/method',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
