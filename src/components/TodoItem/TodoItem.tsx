import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/index';
import { PreparedTodo } from '../Interfaces/Interfaces';

import './TodoItem.scss';

interface Props {
  todo: PreparedTodo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo__item-wrapper" style={{ backgroundColor: `${todo.completed ? 'green' : 'red'}` }}>
      <span className="todo__item-name">{todo.user?.name}</span>
      <p className="todo__item-title">{todo.title}</p>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        type="button"
        className="remove-btn"
      >
        Remove
      </button>
    </div>
  );
};
