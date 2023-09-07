import { styled } from 'styled-components';

export const Input = styled.input`
  padding: 8px 12px;
  margin-top: 5px;
  font: inherit;
  outline: none;
  cursor: pointer;
  &:focus {
    border: 2px solid #6c2167;
  }
`;

export const Title = styled.h5`
  font-size: 20px;
  margin-bottom: 5px;
`;
