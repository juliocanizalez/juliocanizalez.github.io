import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => (
  <Box as="main" pb={8}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://img.icons8.com/fluency/96/000000/forward.png"
      />
      <title>Julio Canizalez</title>
    </Head>
    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
  </Box>
);

export default Main;
