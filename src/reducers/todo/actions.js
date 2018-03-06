import todoTypes from './types';

let nextTodoId = 0;

export const addTodo = todo => ({
  type: todoTypes.ADD_TODO,
  text: todo,
  id: nextTodoId++
});

export const toggleTodo = id => ({
  type: todoTypes.TOGGLE_TODO,
  id
});

export default {
  addTodo,
  toggleTodo
};
