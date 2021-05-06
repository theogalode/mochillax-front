import axios from 'axios';

class CategoryService {
  constructor(){
    this.axios = axios.create({
      baseURL: 'http://localhost:3000'
    });
  }

  async getAll() {
    let response = await this.axios.get('/categories', {});
    return response.data;
  }

  async getAllSubCategoriesByIdCategory(id) {
    let response = await this.axios.get(`/categories/${id}/sub-categories`, {});
    return response.data;
  }

  async getById(id){
    let response = await this.axios.get(`/categories/${id}`, {});
    return response.data;
  }
}

export default new CategoryService();