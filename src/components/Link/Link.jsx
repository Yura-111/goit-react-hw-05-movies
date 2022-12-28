import PropTypes from 'prop-types';
import { NavLinkStyled, LinkStyled } from './NavigateLink.styled';

export const Link = ({ icon: Icon, text, to }) => {
  return (
    <LinkStyled to={to}>
      {Icon}
      {text}
    </LinkStyled>
  );
};

export const NavLink = ({ text, to, end }) => {
  return (
    <NavLinkStyled end={end} to={to}>
      {text}
    </NavLinkStyled>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
