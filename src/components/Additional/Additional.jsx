import { Outlet } from 'react-router-dom';
import { NavLink } from 'components/Link/Link';
import { Title } from 'components/PageTitle/PageTitle';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/App.styled';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Rewievs' },
  { href: 'posters', text: 'Backdrops' },
];

export const Additional = () => {
  return (
    <Box
      p="16px"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
    >
      <Title text={'Aditional information'} />
      <Box as="ul" display="flex" gridGap="16px" mb="24px">
        {navItems.map(({ href, text }) => (
          <li key={href}>
            <NavLink to={href} text={text} />
          </li>
        ))}
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
