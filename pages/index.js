import {
  Container,
  Box,
  Text,
  Link,
  Grid,
  GridItem,
  Center
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Page = () => (
  <Container height="100vh" align="center">
    <Center h="100vh">
      <Box borderRadius="lg" alignSelf="center">
        <Text fontSize="6xl">Hello, I&apos;m Julio</Text>
        <Text>I&apos;m working in my new website, stay in tune!</Text>
        <Grid
          gap={1}
          templateColumns="repeat(2,1fr)"
          width="16"
          justifyContent="center"
          mt={4}
        >
          <GridItem>
            <Link
              href="https://www.linkedin.com/in/juliocanizalez/"
              target="_blank"
            >
              <FaLinkedin style={{ height: 'auto', width: '1.6rem' }} />
            </Link>
          </GridItem>
          <GridItem>
            <Link href="https://www.github.com/juliocanizalez" target="_blank">
              <FaGithub style={{ height: 'auto', width: '1.6rem' }} />
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Center>
  </Container>
);

export default Page;
