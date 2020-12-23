import styled from 'styled-components';

export const SelectContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  width: 150px;
  border: solid 1px;
  border-radius: 5px;
`;

export const SelectValue = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  user-select: none;
`;

export const SelectListContainer = styled.div`
  position: absolute;

  width: 100%;
  background-color: rgba(100, 47, 47, 0.9);

  display: flex;
  flex-direction: column;

  overflow: hidden;

  ${({ isOpen }) => (isOpen ? `height: auto;` : 'height: 0;')}
`;

export const SelectListItem = styled.div`
  cursor: pointer;
  user-select: none;

  padding: 5px 10px;
  margin: 4px;

  transition: all 0.2s;

  &:hover {
    background-color: white;
  }
`;
