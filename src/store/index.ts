import { createStore, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PreparedTodo } from '../components/Interfaces/Interfaces';

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const SET_TODOS = 'SET_TODOS';
const SORT = 'SORT';
const REMOVE = 'REMOVE';

export const toggleLoading = () => ({ type: TOGGLE_LOADING });
export const setTodos = (todos: PreparedTodo[]) => ({ type: SET_TODOS, todos });
export const sortTodos = (sortType: string) => ({ type: SORT, sortType });
export const removeTodo = (id: number) => ({ type: REMOVE, id });

export const loadingStatus = (state: RootState) => state.isLoading;
export const getTodos = (state: RootState) => state.todos;

export type RootState = {
  isLoading: boolean;
  todos: PreparedTodo[];
};

const initialState: RootState = {
  isLoading: false,
  todos: [],
};

const sorter = (sortType: string, array: PreparedTodo[]) => {
  switch (sortType) {
    case 'by title':
      return [...array].sort((a, b) => a.title.localeCompare(b.title));

    case 'by name':
      return [...array].sort((a, b) => {
        if (a.user && b.user) {
          return a.user.name.localeCompare(b.user.name);
        }

        return 0;
      });

    case 'by completed':
      return [...array].sort((a, b) => Number(b.completed) - Number(a.completed));

    default:
      return array;
  }
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };

    case SET_TODOS:
      return {
        ...state,
        todos: action.todos,
      };

    case SORT:
      return {
        ...state,
        todos: sorter(action.sortType, state.todos),
      };

    case REMOVE:
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== action.id),
      };

    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
