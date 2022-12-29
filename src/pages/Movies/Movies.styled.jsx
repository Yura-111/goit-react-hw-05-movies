import styled from 'styled-components';

export const SearchBar = styled.form`
  margin-bottom: 32px;
`;

export const StyledInput = styled.input`
  width: 240px;
  margin-right: 16px;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
`;

export const StyledBtn = styled.button`
  cursor: pointer;
  border: 1px solid gray;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 16px;

  transition: all 250ms linear;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
    background-color: orangered;
    border-color: orangered;
  }
`;
