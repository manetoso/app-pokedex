import { Flex } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from './components';
import { Navbar } from './Navbar';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Flex flexDir="column">
        <Navbar />
        <AnimatedRoutes />
      </Flex>
    </BrowserRouter>
  );
};
