import React, { useState, useEffect } from 'react';
import './description.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  isTodoSelected,
  selectedSubTodosIdsById,
  selectedTodo,
} from '../../store/selectors';
import {
  TodoDescriptionContainer,
  TodoDescriptionText,
  TodoEditContainer, TodoInfo,
  TodoInfoControl,
  TodoTitle,
} from './styled';
import { List } from '../../styled';
import SubTodoItem from '../subTodoItem';
import Input from '../../components/input/Input';
import { todosActions } from '../../store/slices/todosSlice';
import Button from '../../components/button';

function TodoDescription() {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [titleState, setTitleState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  const todo = useSelector(selectedTodo);
  const isOpen = useSelector(isTodoSelected);
  const subTodosIds = useSelector(selectedSubTodosIdsById);

  const todoId = todo?.id;

  function clearState() {
    setNewTodoTitle('');
    setTitleState('');
    setDescriptionState('');
    setIsEdit(false);
  }

  useEffect(() => {
    clearState()
  }, [todoId]);

  function addNewSubTodo() {
    const newSubTodo = {
      title: newTodoTitle,
      id: todo.id,
    };

    if (newTodoTitle !== '') {
      dispatch(todosActions.addSubTodo(newSubTodo));
      clearState();
    }
  }

  function updateCurrentTodo() {
    const updatedData = {
      title: titleState,
      description: descriptionState,
    };

    if (titleState === '') {
      alert('Task title cannot be empty.');
      return;
    }

    dispatch(
      todosActions.updateTodo({
        id: todo.id,
        data: updatedData,
      })
    );

    clearState();
  }

  function initiateTodoEditing() {
    setTitleState(todo.title);
    setDescriptionState(todo.description);
    setIsEdit(true);
  }

  function renderEdit() {
    return (
      <>
        <TodoInfoControl>
          <Button title="Close" onClick={clearState} />
          <Button title="Save" onClick={updateCurrentTodo} />
        </TodoInfoControl>
        <input
          value={titleState}
          onChange={(e) => setTitleState(e.target.value)}
        />
        <input
          value={descriptionState}
          onChange={(e) => setDescriptionState(e.target.value)}
        />
      </>
    );
  }

  function renderDescription() {
    return (
      <>
        <TodoInfoControl>
          <Button title="Edit" onClick={initiateTodoEditing} />
        </TodoInfoControl>
        <TodoTitle>{todo.title}</TodoTitle>
        {todo.description !== '' && (
          <TodoDescriptionText>{todo.description}</TodoDescriptionText>
        )}
      </>
    );
  }

  return isOpen ? (
    <TodoDescriptionContainer>
      <TodoInfo>
        <TodoEditContainer>
          {isEdit ? renderEdit() : renderDescription()}
        </TodoEditContainer>
        <Input
          onSubmit={addNewSubTodo}
          value={newTodoTitle}
          onChange={setNewTodoTitle}
          placeholder="Type sub task title..."
        />
      </TodoInfo>
      <List>
        {subTodosIds.map((id) => (
          <SubTodoItem key={id} id={id} />
        ))}
      </List>
    </TodoDescriptionContainer>
  ) : null;
}

export default TodoDescription;
