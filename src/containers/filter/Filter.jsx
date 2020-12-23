import React from 'react';
import { FilterContainer } from '../../styled';
import { filterTypes } from '../../constants';
import Button from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../store/slices/filterSlice';
import { selectedFilter } from '../../store/selectors/filterSelectors';
import { todosActions } from '../../store/slices/todosSlice';

function Filter(props) {
  const dispatch = useDispatch();
  const filter = useSelector(selectedFilter);

  function setFilter(type) {
    dispatch(todosActions.clearSelectedTodo);
    dispatch(filterActions.setFilter(type));
  }

  return (
    <FilterContainer>
      {Object.values(filterTypes).map((item) => (
        <Button
          key={item}
          title={item}
          onClick={() => setFilter(item)}
          styleProps={{ active: item === filter }}
        />
      ))}
    </FilterContainer>
  );
}

export default Filter;
