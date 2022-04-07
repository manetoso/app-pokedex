import { Box, Flex } from '@chakra-ui/react';
import { HomeBanner, HomeTextCover } from '../components';
import { PageAnimation } from './PageAnimation';

export const Home = () => {
  return (
    <PageAnimation>
      <Box
        bgGradient="linear(to-t, brand.primary, brand.third)"
        minH={{ base: 'calc(100vh - 5rem)', lg: 'calc(100vh - 7rem)' }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          minH={{ base: 'calc(100vh - 5rem)', lg: 'calc(100vh - 7rem)' }}
        >
          <Flex
            flexDir={{ base: 'column', lg: 'row-reverse' }}
            paddingX="2rem"
            justifyContent={{ lg: 'space-between' }}
            alignItems={{ lg: 'center' }}
            marginX="auto"
            maxW={{
              base: '640px',
              md: '768px',
              lg: '1024px',
              xl: '1280px',
              '2xl': '1536px',
            }}
          >
            <HomeBanner />
            <HomeTextCover />
          </Flex>
        </Flex>
      </Box>
    </PageAnimation>
  );
};
