import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todo.list
  };
};

export default connect(mapStateToProps, undefined)(TodoList);
