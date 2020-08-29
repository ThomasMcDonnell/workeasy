import axios from 'axios';
import jwt_decode from 'jwt-decode';

const API_AUTH_BASE = 'http://localhost:3000/v1/accounts/';

class AuthService {
  async register(userData) {
    const response = await axios.post(API_AUTH_BASE + 'registrations', userData);

    return response.data;
  }

  async login(userData) {
    const response = await axios.post(API_AUTH_BASE + 'sign_in', userData);
    localStorage.setItem('userToken', JSON.stringify(response.data.jwt));

    return response.data;
  }

  async forgotPassword(userData) {
    const response = await axios.post(API_AUTH_BASE + 'password/forgot', userData);

    return response.data
  }

  logout() { localStorage.removeItem('userToken'); };

  currentUser() {
    const token = localStorage.getItem('userToken');
    if(token) {
      return JSON.stringify(jwt_decode(token));
    }
  }
}

export default new AuthService();