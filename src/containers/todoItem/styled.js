import styled from 'styled-components';

export const TodoItemPriority = styled.span`
  ${({ priority }) => {
    switch (priority) {
      case 'Low':
        return `
      color: green;
    `;
      case 'High':
        return `
      color: red;
    `;
      default:
        return `
      color: yellow;
    `;
    }
  }}
  margin-right: 15px;
`;
