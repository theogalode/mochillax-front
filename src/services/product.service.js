import axios from 'axios';

class ProductService {
  constructor(){
    this.axios = axios.create({
      baseURL: 'http://localhost:3000'
    });
  }

  async getById(id){
    let response = await this.axios.get(`/products/${id}`, {});
    return response.data;
  }
}

export default new ProductService();