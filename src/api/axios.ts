import axios from 'axios';

const url = 'https://www.mercadobitcoin.net/api/'

export const api = axios.create({
  baseURL: url
})