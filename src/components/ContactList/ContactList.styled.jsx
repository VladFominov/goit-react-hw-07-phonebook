import styled from '@emotion/styled';

export const Li = styled.li`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
  font-style: italic;
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const BtnOnDelete = styled.button`
  border: none;
  cursor: pointer;
  &:hover,
  focus {
    border-radius: 10px;
    background: cadetblue;
  }
  .DeleteForeverIcon = {
    font-size: 30px;
  }
`;

export const DeleteForeverIcon = styled.svg`
    font-size: 30px;
`;