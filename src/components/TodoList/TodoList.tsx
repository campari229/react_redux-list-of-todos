import React from 'react';
import { PreparedTodo } from '../Interfaces/Interfaces';
import { TodoItem } from '../TodoItem/TodoItem';

import './TodoList.scss';

interface Props {
  todos: PreparedTodo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo__list list">
    {todos.map(todo => (
      <li
        className="list__item"
        key={todo.id}
      >
        <TodoItem todo={todo} />
      </li>
    ))}
  </ul>
);
