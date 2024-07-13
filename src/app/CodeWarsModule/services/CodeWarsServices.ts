import axios from 'axios';
import { CodeWarsModel } from '../models/CodeWarsModel.ts';

export class CodeWarsServices {
  static list = async (): Promise<CodeWarsModel[]> => {
    return axios
      .get<CodeWarsModel[]>('http://localhost:3000/posts')
      .then((response) => response.data);
  };
}
