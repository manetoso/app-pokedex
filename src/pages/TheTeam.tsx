import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components';
import { PageAnimation } from './PageAnimation';

export const TheTeam = () => {
  let navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };
  return (
    <PageAnimation>
      <Box
        bg="brand.danger"
        minH={{ base: 'calc(100vh - 5rem)', lg: 'calc(100vh - 7rem)' }}
      >
        <Flex
          flexDir="column"
          paddingX="2rem"
          justifyContent="center"
          alignItems="center"
          marginX="auto"
          minH={{ base: 'calc(100vh - 5rem)', lg: 'calc(100vh - 7rem)' }}
          maxW={{
            base: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
          }}
        >
          <VStack spacing="10">
            <Box position="relative">
              <Heading
                fontFamily="fonts.karla"
                fontSize={{ base: '14.5rem', lg: '30rem' }}
                color="red.900"
              >
                404
              </Heading>
              <Image
                src="/assets/banners/team-rocket-banner.svg"
                alt="Team Rocket"
                objectFit="contain"
                width="100%"
                height="100%"
                top={{ base: '5', lg: '20' }}
                position="absolute"
              />
            </Box>
            <Text
              fontFamily="fonts.karla"
              fontWeight="bold"
              fontSize="3xl"
              textAlign={{ base: 'center', lg: 'start' }}
              lineHeight="7"
              color="brand.black"
              paddingX="4rem"
            >
              <Text display="inline" color="brand.white" as="span">
                The team rocket
              </Text>{' '}
              has won this time.
            </Text>
            <CustomButton buttonType="secondary" onClick={handleHome}>
              Return
            </CustomButton>
          </VStack>
        </Flex>
      </Box>
    </PageAnimation>
  );
};
