import { createSelector } from '@reduxjs/toolkit';
import { selectedFilter } from './filterSelectors';
import { filterTypes } from '../../constants';

export const allTodos = (state) => state.todos.items;
export const allTodosIds = (state) => state.todos.items.map((item) => item.id);
export const todoById = (id) => (state) =>
  state.todos.items.find((item) => item.id === id);
export const currentPriority = (state) => state.todos.priority;
export const selectedTodoId = (state) => state.todos.selectedTodoId;
export const allSubTodos = (state) => state.todos.subItems;
export const subTodoById = (id) => (state) =>
  state.todos.subItems.find((item) => item.id === id);

export const filteredTodosIds = createSelector(
  allTodos,
  selectedFilter,
  (todos, filter) => {
    switch (filter) {
      case filterTypes.active:
        return todos.filter((item) => !item.isCompleted).map((item) => item.id);
      case filterTypes.completed:
        return todos.filter((item) => item.isCompleted).map((item) => item.id);
      default:
        return todos.map((item) => item.id);
    }
  }
);
export const isTodosExist = createSelector(
  filteredTodosIds,
  (todos) => todos.length > 0
);
export const selectedTodo = createSelector(
  allTodos,
  selectedTodoId,
  (todos, id) => todos.find((item) => item.id === id)
);
export const isTodoSelected = createSelector(
  selectedTodoId,
  (id) => id !== null
);
export const selectedSubTodosIdsById = createSelector(
  allSubTodos,
  selectedTodoId,
  (subTodos, id) =>
    subTodos.filter((item) => item.todoId === id).map((item) => item.id)
);
