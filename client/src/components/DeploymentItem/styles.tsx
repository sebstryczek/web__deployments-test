import styled from 'styled-components';

export const Row = styled.div`
  position: relative;
  display: flex;
  width: 602px;
  background-color: #ffffff;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #f1f1f1;
    & > button {
      opacity: 1;
    }
  }
`;

export const DeleteButton = styled.button`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  right: 0;
  height: 24px;
  line-height: 24px;
  background: #3B737B;
  border: none;
  color: #f1f1f1;
  width: 24px;
  cursor: pointer;

  &:hover {
    background: #D297A0;
  }

  &:disabled {
    cursor: default;
    background: #3B737B;
    opacity: 0.3;
  }
`;
