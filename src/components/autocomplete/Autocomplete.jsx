import React, { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import {
  AutocompleteContainer,
  AutocompleteInput,
  AutocompleteInputContainer,
  AutocompleteOption,
  AutocompleteOptions,
  AutocompleteOptionsContainer,
} from './styled';
import { SearchIcon } from '../icons/Icons';

function Autocomplete({
  value: valueProp,
  onChange,
  options = [],
  onValuePick,
  placeholder = '',
}) {
  const [valueState, setValueState] = useState('');
  const autocompleteRef = useRef();
  const [isOpen, setIsOpen] = useClickOutside(autocompleteRef);

  const value = valueProp === undefined ? valueState : valueProp;

  function handleValueChange(e) {
    const { value } = e.target;
    if (onChange !== undefined) onChange(value);
    else setValueState(value);
  }

  function handleValuePick(value) {
    if (onValuePick) onValuePick(value);
    setIsOpen(false);
  }

  return (
    <AutocompleteContainer ref={autocompleteRef}>
      <AutocompleteInputContainer>
        <SearchIcon />
        <AutocompleteInput
          placeholder={placeholder}
          onClick={() => setIsOpen((prev) => !prev)}
          value={value}
          onChange={handleValueChange}
        />
      </AutocompleteInputContainer>
      <AutocompleteOptionsContainer isOpen={isOpen}>
        <AutocompleteOptions>
          {options.map((option) => (
            <AutocompleteOption
              key={option.value}
              onClick={() => handleValuePick(option.value)}
            >
              {option.label}
            </AutocompleteOption>
          ))}
        </AutocompleteOptions>
      </AutocompleteOptionsContainer>
    </AutocompleteContainer>
  );
}

export default Autocomplete;
