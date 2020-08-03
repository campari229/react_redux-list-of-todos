import React from 'react';
import { useDispatch } from 'react-redux';
import { sortTodos } from '../../store/index';

import './Buttons.scss';

export const Buttons: React.FC<{}> = () => {
  const dispatch = useDispatch();

  return (
    <div className="todo__buttons">
      <button
        className="btn"
        type="button"
        onClick={() => dispatch(sortTodos('by title'))}
      >
        Sort by title
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => dispatch(sortTodos('by name'))}
      >
        Sort by name
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => dispatch(sortTodos('by completed'))}
      >
        Show completed first
      </button>
    </div>
  );
};
