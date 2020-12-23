import React, { useState } from 'react';
import { CheckboxInput } from '../../styled';

export default function Checkbox({ value: valueProp, onChange }) {
  const [valueState, setValueState] = useState(false);

  const value = valueProp === undefined ? valueState : valueProp;

  function handleValueChange() {
    if (onChange) onChange();
    else setValueState((prev) => !prev);
  }

  return <CheckboxInput checked={value} onChange={handleValueChange}/>;
}
