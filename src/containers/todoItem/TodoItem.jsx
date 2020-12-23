import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { todoById } from '../../store/selectors';
import { ListItem, ListItemControlGroup, ListItemTitle } from '../../styled';
import { todosActions } from '../../store/slices/todosSlice';
import Checkbox from '../../components/checkbox/Checkbox';
import Button from '../../components/button';
import { TodoItemPriority } from './styled';

export default function TodoItem({ id }) {
  const todo = useSelector(todoById(id));
  const dispatch = useDispatch();

  function deleteCurrentTodo() {
    dispatch(todosActions.deleteTodo(id));
  }

  function toggleCurrentTodo() {
    dispatch(todosActions.toggleTodo(id));
  }

  function selectCurrentTodo() {
    dispatch(todosActions.selectTodo(id));
  }

  return (
    <ListItem>
      <Checkbox value={todo.isCompleted} onChange={toggleCurrentTodo} />
      <ListItemTitle
        selectable
        isCompleted={todo.isCompleted}
        onClick={selectCurrentTodo}
      >
        {todo.title}
      </ListItemTitle>
      <TodoItemPriority priority={todo.priority}>{todo.priority}</TodoItemPriority>
      <ListItemControlGroup>
        <Button title="Delete" onClick={deleteCurrentTodo} />
      </ListItemControlGroup>
    </ListItem>
  );
}
