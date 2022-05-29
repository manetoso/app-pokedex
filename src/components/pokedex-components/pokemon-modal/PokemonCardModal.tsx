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

export const PokemonCardModal = ({ pokemonData }: Props) => {
  return (
    <>
      <Flex
        alignItems="center"
        paddingX="1rem"
        paddingY="1rem"
        position="relative"
        zIndex="99"
      >
        <Flex flexDir="column" paddingX="1rem" gap="1rem" w="35%">
          <Image alt="Pokemon Sprite" w="100%" src={pokemonData.picture} />
          <Flex justifyContent="end" gap={4}>
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
          gap="1rem"
          w="65%"
          paddingX="1rem"
          paddingY="1rem"
          position="relative"
        >
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <Heading color="white" fontWeight="bold" textTransform="capitalize">
              {pokemonData.name}
            </Heading>
            <Flex alignItems="center" gap={4}>
              <Text color="white" textTransform="capitalize" fontSize="xl">
                {pokemonData.version}
              </Text>
              <Center bg="brand.third" boxSize="3rem" borderRadius="full">
                {pokemonData.id}
              </Center>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            alignItems="start"
            bg="white"
            minW="60%"
            borderRadius="lg"
            paddingX="2rem"
            paddingY="1rem"
          >
            <Heading fontSize="xl">Abilities</Heading>
            <Flex w="100%" gap="0.25rem">
              {pokemonData.abilities.map((ability, i) => (
                <Fragment key={i}>
                  <Text fontSize="xl" textTransform="capitalize">
                    {ability.ability.name}
                  </Text>
                  <Text fontSize="xl">
                    {i + 1 !== pokemonData.abilities.length && '-'}
                  </Text>
                </Fragment>
              ))}
            </Flex>
          </Flex>
          <Flex
            alignItems="center"
            gap="5rem"
            w="100%"
            bg="white"
            borderRadius="lg"
            paddingX="2rem"
            paddingY="1rem"
          >
            <Flex
              flexDir="column"
              alignItems="start"
              w="100%"
              bg="white"
              borderRadius="lg"
              paddingX="1rem"
              paddingY="0.75rem"
            >
              <Text fontSize="xl">Healthy Points</Text>
              <Text fontSize="xl" fontWeight="bold">
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
              <Text fontSize="xl">Experience</Text>
              <Text fontSize="xl" fontWeight="bold">
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
          </Flex>
          <Grid w="100%" templateColumns="repeat(4, 1fr)" gap="0.5rem">
            {pokemonData.stats.map((stat, i) => (
              <GridItem
                key={i}
                bg="white"
                borderRadius="lg"
                marginX="1rem"
                paddingX="0.75rem"
                paddingY="0.5rem"
              >
                <Flex flexDir="column" alignItems="center">
                  <Center border="2px" borderRadius="full" boxSize="3rem">
                    <Text fontSize="xl" fontWeight="bold">
                      {stat.base_stat}
                    </Text>
                  </Center>
                  <Text
                    fontSize="xl"
                    textTransform="capitalize"
                    textAlign="center"
                  >
                    {stat.stat.name}
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Box
        position="absolute"
        right="0"
        top="0"
        bottom="0"
        width="65%"
        zIndex="98"
        borderRightRadius="2xl"
        bgGradient={`linear(to-t, types.${pokemonData.bgColor}.500, types.${pokemonData.bgColor}.900)`}
      />
    </>
  );
};
