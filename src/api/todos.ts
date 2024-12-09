import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 1873;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const postTodos = ({ userId, title, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', { userId, title, completed });
};

export const deleteTodos = (postId: number) => {
  return client.delete(`/todos/${postId}`);
};

export const updateTodos = (todoId: number, todo: Todo) => {
  return client.patch(`/todos/${todoId}`, todo);
};
