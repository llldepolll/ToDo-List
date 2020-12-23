import React, { useState } from 'react';

import './input.css';
import { SearchIcon } from '../icons/Icons';

const Input = ({
  placeholder: placeholderProp,
  onChange,
  onSubmit,
  value: valueProp,
  Icon,
}) => {
  const [valueState, setValueState] = useState('');

  const value = valueProp === undefined ? valueState : valueProp;

  const placeholder =
    placeholderProp === undefined ? 'Type something' : placeholderProp;

  function submitForm(e) {
    e.preventDefault();

    if (onSubmit) onSubmit();
    else console.log(e);
  }

  function handleValueChange(e) {
    const { value } = e.target;
    if (onChange !== undefined) onChange(value);
    else setValueState(value);
  }

  const ActuallyIcon = () =>
    Icon === undefined ? <SearchIcon/> : <Icon />;

  return (
    <form onSubmit={submitForm} className="inputWrapper">
      <ActuallyIcon />
      <input
        className="input"
        placeholder={placeholder}
        onChange={handleValueChange}
        value={value}
      />
    </form>
  );
};

export default Input;
