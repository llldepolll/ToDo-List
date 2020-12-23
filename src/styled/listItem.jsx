import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  padding: 10px 15px;
  border-bottom: 1px solid #ededed;

  font-size: 24px;
  font-family: font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const ListItemTitle = styled.span`
  width: 100%;

  margin-left: 15px;
  
  ${({ selectable = false }) => selectable && 'cursor: pointer;'}
  ${({ isCompleted }) =>
    isCompleted && `text-decoration: line-through; opacity: 0.7`}
`;

export const ListItemControlGroup = styled.div``;
