import { styled } from 'styled-components';

export const Item = styled.li`
  background-color: #ffffff;
  border: 2px solid #bf4f74;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  border-radius: 3px;
  color: #bf4f74;
  background: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  color: white;
  padding: 8px 12px;
  border: none;
  font-size: 20px;
  &:hover {
    background: #6c2167;
  }
`;
