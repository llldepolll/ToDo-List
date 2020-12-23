import styled from 'styled-components';

export const TodoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  border-left: 1px solid #ededed;
`;

export const TodoInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const TodoEditContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TodoInfoControl = styled.div`
  display: flex;
  justify-content: flex-end;  
`;

export const TodoTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const TodoDescriptionText = styled.span`
  font-size: 25px;
  margin-top: 20px;
  word-break: break-all;
`;
