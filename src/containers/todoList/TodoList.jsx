import React, { useState } from 'react';

import Title from '../../components/title/title';
import Input from '../../components/input/Input';
import { todosActions } from '../../store/slices/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filteredTodosIds, isTodosExist } from '../../store/selectors';
import TodoItem from '../todoItem';
import { List, ListItem } from '../../styled';
import Filter from '../filter';
import PrioritiesSelect from '../prioritiesSelect';
import { TodoListControl, TodoListDataContainer } from './styled';
import TodoDescription from '../todoDescription';

export default function TodoList() {
  const [taskName, setTaskName] = useState('');
  const todosIds = useSelector(filteredTodosIds);
  const isTodos = useSelector(isTodosExist);
  const dispatch = useDispatch();

  function addNewTask() {
    if (taskName !== '') {
      dispatch(todosActions.addTodo(taskName));
      setTaskName('');
    }
  }

  return (
    <div>
      <Title title="TodoList App" />
      <div>
        <Input
          onSubmit={addNewTask}
          placeholder="Type task title..."
          onChange={setTaskName}
          value={taskName}
          Icon={() => <i className="fas fa-plus" />}
        />
        <TodoListControl>
          <Filter />
          <PrioritiesSelect />
        </TodoListControl>
      </div>
      <TodoListDataContainer>
        <List>
          {isTodos ? (
            todosIds.map((id) => <TodoItem key={id} id={id} />)
          ) : (
            <ListItem>No tasks</ListItem>
          )}
        </List>
        <TodoDescription />
      </TodoListDataContainer>
    </div>
  );
}
