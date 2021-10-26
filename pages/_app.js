import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Layout from '../components/layout/main';
import theme from '../utils/theme';

const Website = ({ Component, pageProps, router }) => (
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  </ChakraProvider>
);

export default Website;
