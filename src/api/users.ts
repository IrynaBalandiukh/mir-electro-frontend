import { FormInputData } from '../types/FormInputData';
import { User } from '../types/User';
import { client } from '../utils/fetchClient';

type ApiResponse = {
  message: string;
}

// Функція для відправлення POST-запиту для створення нового користувача з переданими даними форми
export const postUser = (data: FormInputData) => {
  return client.post<ApiResponse>('/api/user', data);
};

// Функція для відправлення GET-запиту для отримання всіх користувачів
export const getAllUsers = () => {
  return client.getAll<User[]>('/api/user');
}
