import actions from './actions';

export const addTodo = todo => async dispatch => {
  dispatch(actions.addTodo(todo));
}