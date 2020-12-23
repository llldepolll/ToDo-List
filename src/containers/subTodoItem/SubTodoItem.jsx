import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subTodoById } from '../../store/selectors';
import { todosActions } from '../../store/slices/todosSlice';
import { ListItem, ListItemControlGroup, ListItemTitle } from '../../styled';
import Checkbox from '../../components/checkbox';
import Button from '../../components/button';

function SubTodoItem({ id }) {
  const subTodo = useSelector(subTodoById(id));
  const dispatch = useDispatch();

  function deleteCurrentSubTodo() {
    dispatch(todosActions.deleteSubTodo(id));
  }

  function toggleCurrentTodo() {
    dispatch(todosActions.toggleSubTodo(id));
  }

  return (
    <ListItem>
      <Checkbox value={subTodo.isCompleted} onChange={toggleCurrentTodo} />
      <ListItemTitle isCompleted={subTodo.isCompleted} >
        {subTodo.title}
      </ListItemTitle>
      <ListItemControlGroup>
        <Button title="Delete" onClick={deleteCurrentSubTodo} />
      </ListItemControlGroup>
    </ListItem>
  );
}

export default SubTodoItem;
