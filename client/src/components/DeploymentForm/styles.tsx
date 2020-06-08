import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  height: 24px;
  line-height: 24px;
  margin-bottom: 8px;
  width: 300px;
  justify-content: space-between;
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 24px;
  line-height: 24px;
  border: 1px solid #e4e4e4;
  margin-left: 8px;
  padding: 0;
  width: 200px;
`;

export const Select = styled.select`
  box-sizing: border-box;
  height: 24px;
  line-height: 24px;
  border: 1px solid #e4e4e4;
  margin-left: 8px;
  padding: 0;
  width: 200px;
`;

export const SubmitButton = styled.button`
  height: 24px;
  border: none;
  color: #f1f1f1;
  width: 300px;
  cursor: pointer;
  margin-bottom: 32px;
  line-height: 24px;
  background-color: #3B737B;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    background-color: #D297A0;
  }

  &:disabled {
    cursor: default;
    background: #3B737B;
    opacity: 0.3;
  }
`;
