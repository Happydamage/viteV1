import axios from 'axios';
import { CodeWarsModel } from '../models/CodeWarsModel.ts';

export class CodeWarsServices {
  static list = async () => {
    try {
      return axios
        .get<CodeWarsModel[]>('http://localhost:3000/codewars')
        .then((response) => response.data);
    } catch (error) {
      console.error(error);
    }
  };

  static create = async (taskData: CodeWarsModel) => {
    try {
      return axios.post<CodeWarsModel>('http://localhost:3000/codewars', {
        taskData,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
