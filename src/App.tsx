import { ChakraProvider } from '@chakra-ui/react';
import theme from './chackraExtended';
import { Navigation } from './routes/Navigation';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navigation />
  </ChakraProvider>
);
