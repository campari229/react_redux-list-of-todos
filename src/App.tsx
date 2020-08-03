import React from 'react';
import './App.scss';

import { useSelector, useDispatch } from 'react-redux';
import {
  getTodos,
  toggleLoading,
  loadingStatus,
  setTodos,
} from './store/index';
import { Todo, User, PreparedTodo } from './components/Interfaces/Interfaces';
import { TodoList } from './components/TodoList/TodoList';
import { getData, usersURL, todosURL } from './api';
import { Buttons } from './components/Buttons/Buttons';

const App: React.FC<{}> = () => {
  const todoList = useSelector(getTodos);

  const isLoading = useSelector(loadingStatus);

  const dispatch = useDispatch();

  const loadTodos = async () => {
    dispatch(toggleLoading());
    const todos = await getData<Todo[]>(todosURL);
    const users = await getData<User[]>(usersURL);
    const preparedTodos: PreparedTodo[] = todos.map((todo) => (
      {
        ...todo,
        user: users.find((user) => user.id === todo.userId),
      }
    ));

    dispatch(setTodos(preparedTodos));
    dispatch(toggleLoading());
  };

  return (
    <div className="todo">
      <h1>Dynamic list of todos</h1>
      {
        todoList.length
          ? (
            <div>
              <Buttons />
              <TodoList todos={todoList} />
            </div>
          )
          : (
            <button
              className="btn"
              type="button"
              onClick={loadTodos}
              disabled={isLoading}
            >
              {`${isLoading ? 'Loading...' : 'Load'}`}
            </button>
          )
      }
    </div>
  );
};

export default App;
