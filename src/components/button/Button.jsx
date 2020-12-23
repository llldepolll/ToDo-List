import React from 'react';
import { ButtonInput } from '../../styled/buttonInput';

function Button({ title: titleProp, onClick, styleProps }) {
  function handleClick() {
    if (onClick) onClick();
    else console.log('Please attach method to this button.');
  }

  const title = titleProp === undefined ? 'Button' : titleProp;

  return (
    <ButtonInput {...styleProps} onClick={handleClick}>
      {title}
    </ButtonInput>
  );
}

export default Button;
