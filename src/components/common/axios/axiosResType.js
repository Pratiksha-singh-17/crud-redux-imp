import axios from 'axios';
import environment from '../../../environment/environment'

const get = async (url,params) => {
    try {
      const res = await axios.get(`${environment.baseUrl}${url}`, params );
      return res;
    } catch (error) {
      throw error;
    }
}

const post = async (url,data) => {
  try {
    const res = await axios.post(`${environment.baseUrl}${url}`,data);
    return res;
  } catch (error) {
    throw error;
  }
}

export {
  get,
  post
}