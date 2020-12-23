import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  SelectContainer,
  SelectListContainer,
  SelectListItem,
  SelectValue,
} from './styled';
import useClickOutside from '../../hooks/useClickOutside';

function Select({ value: valueProp, options = [], onChange }) {
  const selectRef = useRef();
  const [valueState, setValueState] = useState(null);
  const [isOpen, setIsOpen] = useClickOutside(selectRef);

  function handleValueChange(item) {
    if (onChange) onChange(item);
    else setValueState(item);

    setIsOpen(false);
  }

  const value = valueProp === undefined ? valueState : valueProp;

  return (
    <SelectContainer ref={selectRef}>
      <SelectValue onClick={() => setIsOpen(true)}>{value}</SelectValue>
      <SelectListContainer isOpen={isOpen}>
        {options.map((item) => (
          <SelectListItem
            key={item.value}
            onClick={() => handleValueChange(item.value)}
          >
            {item.label}
          </SelectListItem>
        ))}
      </SelectListContainer>
    </SelectContainer>
  );
}

export default Select;
