import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/App.styled';

export const Layout = () => {
  return (
    <Box maxWidth="1400px" px="15px" pb="16px">
      <AppBar />
    </Box>
  );
};
