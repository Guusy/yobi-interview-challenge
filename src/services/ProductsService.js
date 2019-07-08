import axios from 'axios';
import { API_URL } from '../config/default';

export default class ProductsService {
  static getProducts() {
    return axios.get(`${API_URL}/products`)
      .then(response => ({ response }))
      .catch(error => ({ error }));
  }
}
