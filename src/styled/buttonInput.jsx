import styled from 'styled-components';

export const ButtonInput = styled.button`
  padding: 10px 16px;
  color: black;
  border: solid 1px black;
  border-radius: 6px;
  outline: none;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: black;
    color: white;
  }
  

  ${({ active }) => active && 'background-color: black; color: white;'}
`;
