import styled from 'styled-components';

export const AutocompleteContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;

export const AutocompleteInputContainer = styled.div`
  padding: 10px 10px;
  display: flex;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 40px rgba(0, 0, 0, 0.03);

  align-items: center;
  border-bottom: 1px solid #ededed;
`;

export const AutocompleteInput = styled.input`
  border: none;
  padding: none;
  outline: none;
  margin-left: 15px;
  background: transparent;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  box-sizing: border-box;
  font-size: 28px;
`;

export const AutocompleteOptionsContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 64px;
  z-index: 2;
  width: 100%;
  background-color: rgba(100, 47, 47, 0.9);
  box-shadow: inset 0 -2px 40px rgba(0, 0, 0, 0.03);

  ${({ isOpen }) => (isOpen ? `height: auto;` : 'height: 0;')}
`;

export const AutocompleteOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AutocompleteOption = styled.div`
  padding: 4px 16px;
  margin: 4px;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: white;
  }
`;
