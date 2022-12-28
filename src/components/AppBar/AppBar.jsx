import { Outlet } from 'react-router-dom';
import { NavLink } from 'components/Link/Link';
import { Box } from 'components/App.styled';

export const AppBar = () => {
  return (
    <>
      <Box
        as="header"
        p="16px"
        mb="16px"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      >
        <Box as="nav" display="flex" gridGap="16px">
          <NavLink to="/" text="Home" end />
          <NavLink to="movies" text="Films" />
        </Box>
      </Box>
      <Outlet />
    </>
  );
};
