import axios from 'axios';
import { CodeWarsModel } from '../models/CodeWarsModel.ts';

export class CodeWarsServices {
  static list = async () => {
    try {
      return axios.get<CodeWarsModel[]>('http://localhost:3000/posts');
    } catch (error) {
      console.error(error);
    }
  };
}
