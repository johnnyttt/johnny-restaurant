import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1/categories',
    timeout: 1000,
    headers: {'Accept': 'application/json',
    'user-key': '9a5df95a2b983bc3c79763d77008e60e'
    }
  });