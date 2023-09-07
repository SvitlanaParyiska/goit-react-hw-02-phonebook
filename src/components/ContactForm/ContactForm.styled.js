import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: #f3cbd3;
  border: 2px solid #bf4f74;
  border-radius: 4px;
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  margin-top: 5px;
  outline: none;

  font: inherit;
  cursor: pointer;
  &:focus {
    border: 2px solid #6c2167;
  }
`;
