import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  transition: all 250ms linear;

  :hover,
  :focus {
    color: orangered;
  }
`;
