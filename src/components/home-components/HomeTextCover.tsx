import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useCustomMediaQuery } from '../../hooks';
import { CustomButton } from '../atomic';

export const HomeTextCover = () => {
  const { isLg } = useCustomMediaQuery();
  let navigate = useNavigate();
  const handlePokedex = () => {
    navigate('/pokedex');
  };
  return (
    <Flex flexDir="column" gap={{ lg: '2.5rem' }}>
      <Heading
        fontFamily="fonts.karla"
        fontWeight="normal"
        fontSize="5xl"
        letterSpacing="0.25rem"
        textAlign={{ base: 'center', lg: 'start' }}
        as="h1"
      >
        <Text
          display="inline"
          fontWeight="bold"
          fontSize="5xl"
          letterSpacing="0.25rem"
        >
          Find
        </Text>{' '}
        all your favorite{' '}
        <Text
          display="inline"
          fontWeight="bold"
          fontSize="5xl"
          letterSpacing="0.25rem"
        >
          Pokemon
        </Text>
      </Heading>
      <Text
        fontSize="2xl"
        textAlign={{ base: 'center', lg: 'start' }}
        lineHeight="7"
      >
        You can know the type of Pokemon, its strengths, disadventages and
        abilities
      </Text>
      {!isLg && <Box marginY="1rem"></Box>}
      <CustomButton buttonType="primary" onClick={handlePokedex}>
        See pokemons
      </CustomButton>
    </Flex>
  );
};
