import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Progress,
  Tag,
  Text,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { DetailPokemonData } from '../../../interfaces/pokemonData';

interface Props {
  pokemonData: DetailPokemonData;
}

export const PokemonCardModalMobile = ({ pokemonData }: Props) => {
  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        gap="1rem"
        width="100%"
        paddingX="1rem"
        marginTop="3rem"
        position="relative"
        zIndex="99"
      >
        <Heading color="white" fontWeight="bold" textTransform="capitalize">
          {pokemonData.name}
        </Heading>
        <Image alt="Pokemon Sprite" boxSize="18rem" src={pokemonData.picture} />
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap={4}>
            <Center bg="brand.third" boxSize="3rem" borderRadius="full">
              {pokemonData.id}
            </Center>
            <Text color="white" textTransform="capitalize">
              {pokemonData.version}
            </Text>
          </Flex>
          <Flex alignItems="center" gap={4}>
            {pokemonData.types.map(({ slot, type }) => (
              <Tag
                key={slot}
                variant="solid"
                textTransform="capitalize"
                bg={`types.${type.name}.500`}
              >
                {type.name}
              </Tag>
            ))}
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="start"
          w="100%"
          bg="white"
          borderRadius="lg"
          paddingX="1rem"
          paddingY="0.75rem"
        >
          <Heading>Abilities</Heading>
          <Flex w="100%" gap="0.25rem">
            {pokemonData.abilities.map((ability, i) => (
              <Fragment key={i}>
                <Text textTransform="capitalize">{ability.ability.name}</Text>
                <Text>{i + 1 !== pokemonData.abilities.length && '-'}</Text>
              </Fragment>
            ))}
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="start"
          w="100%"
          bg="white"
          borderRadius="lg"
          paddingX="1rem"
          paddingY="0.75rem"
        >
          <Text>Healthy Points</Text>
          <Text fontWeight="bold">
            {pokemonData.hp.base_stat
              .toString()
              .split(/(?=(?:\d{3})+(?:\.|$))/g)
              .join(',')}
          </Text>
          <Progress
            colorScheme="types.grass"
            value={(pokemonData.hp.base_stat / 250) * 100}
            w="100%"
            borderRadius="md"
          />
          <Text>Experience</Text>
          <Text fontWeight="bold">
            {pokemonData.base_experience
              .toString()
              .split(/(?=(?:\d{3})+(?:\.|$))/g)
              .join(',')}
          </Text>
          <Progress
            colorScheme="types.electric"
            value={(pokemonData.base_experience / 255) * 100}
            w="100%"
            borderRadius="md"
          />
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap="0.5rem">
          {pokemonData.stats.map((stat, i) => (
            <GridItem
              key={i}
              bg="white"
              borderRadius="lg"
              paddingX="0.75rem"
              paddingY="0.5rem"
            >
              <Flex flexDir="column" alignItems="center">
                <Center border="2px" borderRadius="full" boxSize="3rem">
                  <Text fontWeight="bold">{stat.base_stat}</Text>
                </Center>
                <Text textTransform="capitalize" textAlign="center">
                  {stat.stat.name}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Box
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        h="65vh"
        zIndex="98"
        borderTopRadius="2xl"
        bgGradient={`linear(to-t, types.${pokemonData.bgColor}.500, types.${pokemonData.bgColor}.900)`}
      />
    </>
  );
};
