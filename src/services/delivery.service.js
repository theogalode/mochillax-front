import axios from 'axios';

class DeliveryService {
  constructor(){
    this.axios = axios.create({
      baseURL: 'http://localhost:3000'
    });
  }

  async create(delivery_data) {
    let response = await this.axios.post('/categories', delivery_data);
    return response.data;
  }
}

export default new DeliveryService();