import { Box } from 'components/App.styled';
import { HomeLink, PageTitle, Container, Title } from './NotFoundPage.styles';

export const NotFoundPage = () => {
  return (
    <Box position="relative" height="100vh">
      <Box
        position="absolute"
        left="50%"
        top="50%"
        maxWidth="520px"
        width="100%"
        lineHeight="1.4"
        textAlign="center"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <Container>
          <PageTitle>Oops!</PageTitle>
          <Title>404 - The Page can't be found</Title>
        </Container>
        <HomeLink to="/">Go TO Homepage</HomeLink>
      </Box>
    </Box>
  );
};
