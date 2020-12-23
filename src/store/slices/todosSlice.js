import { createSlice } from '@reduxjs/toolkit';
import { entities, priorities } from '../../constants';

export const todosInitialState = {
  items: [],
  subItems: [],
  lastTodoIndex: 0,
  lastSubTodoIndex: 0,
  priority: priorities.low,
  selectedTodoId: null,
};

export const blankTodoScheme = {
  id: 'number',
  isCompleted: 'boolean',
  title: 'string',
  priority: 'string',
  timestamp: 'string',
  description: 'string',
};

export const blankSubTodoScheme = {
  id: 'number',
  todoId: 'number',
  isCompleted: 'boolean',
  title: 'string',
  timestamp: 'string',
};

const todosSlice = createSlice({
  name: entities.todos,
  initialState: todosInitialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoData = {
        id: state.lastTodoIndex,
        title: action.payload,
        isCompleted: false,
        timestamp: new Date().toISOString(),
        priority: state.priority,
        description: '',
      };

      state.items.push(newTodoData);
      state.lastTodoIndex = state.lastTodoIndex + 1;
      state.priority = priorities.low;
    },
    toggleTodo: (state, action) => {
      state.items = state.items.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      if (state.selectedTodoId === action.payload) state.selectedTodoId = null;
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      state.subItems = state.subItems.filter((subTodo) => subTodo.todoId !== action.payload);
    },
    selectTodo: (state, action) => {
      state.selectedTodoId = action.payload;
    },
    updateTodo: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.data }
          : item
      );
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
    addSubTodo: (state, action) => {
      const newSubTodo = {
        id: state.lastSubTodoIndex,
        todoId: action.payload.id,
        title: action.payload.title,
        isCompleted: false,
        timestamp: new Date().toISOString(),
      };

      state.subItems.push(newSubTodo);
      state.lastSubTodoIndex = state.lastSubTodoIndex + 1;
    },
    deleteSubTodo: (state, action) => {
      state.subItems = state.subItems.filter(
        (subTodo) => subTodo.id !== action.payload
      );
    },
    toggleSubTodo: (state, action) => {
      state.subItems = state.subItems.map((subTodo) =>
        subTodo.id === action.payload
          ? { ...subTodo, isCompleted: !subTodo.isCompleted }
          : subTodo
      );
    },
    clearSelectedTodo: (state) => {
      state.selectedTodoId = null;
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
