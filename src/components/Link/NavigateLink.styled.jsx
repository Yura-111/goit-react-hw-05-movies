import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  margin-left: 16px;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;

  transition: all 250ms linear;

  :hover,
  :focus {
    color: orangered;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }

  transition: all 250ms linear;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orangered;
  }
`;
