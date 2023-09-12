import { FormInputData } from '../types/FormInputData';
import { User } from '../types/User';
import { client } from '../utils/fetchClient';

type ApiResponse = {
  message: string;
}

// A function to send a POST request to create a new user with the passed form data
export const postUser = (data: FormInputData) => {
  return client.post<ApiResponse>('/api/user', data);
};

// A function to send a GET request to get all users
export const getAllUsers = () => {
  return client.getAll<User[]>('/api/user');
}
