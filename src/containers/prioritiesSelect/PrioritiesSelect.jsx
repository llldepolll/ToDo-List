import React from 'react';
import { getSelectOptionsArrayFromObject } from '../../utils';
import { priorities } from '../../constants';
import Select from '../../components/select';
import { useDispatch, useSelector } from 'react-redux';
import { currentPriority } from '../../store/selectors';
import { todosActions } from '../../store/slices/todosSlice';

import styled from 'styled-components';

const PrioritiesContainer = styled.div`
  display: flex;
`;

const PrioritiesTitle = styled.div`
  margin-right: 15px;
`;

function PrioritiesSelect(props) {
  const priority = useSelector(currentPriority);
  const dispatch = useDispatch();
  const priorityOptions = getSelectOptionsArrayFromObject(priorities);

  function changePriority(value) {
    dispatch(todosActions.setPriority(value));
  }

  return (
    <PrioritiesContainer>
      <PrioritiesTitle>Choose priority:</PrioritiesTitle>
      <Select
        value={priority}
        options={priorityOptions}
        onChange={changePriority}
      />
    </PrioritiesContainer>
  );
}

export default PrioritiesSelect;
