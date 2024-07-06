import axios from 'axios';
import { config } from '../config/config';

export const getData = async (index: number): Promise<number> => {
  const response = await axios.get(`${config.apiUrl}/api?index=${index}`);
  return response.data;
};
