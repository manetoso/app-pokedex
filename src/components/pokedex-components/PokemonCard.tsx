import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Skeleton,
  Spinner,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { usePokemonData } from '../../hooks';
import { SimplePokemon } from '../../interfaces/fetchAllPokemonsResponse';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { isLoading, pokemonData } = usePokemonData(pokemon);
  return (
    <Box
      w="100%"
      bg={`types.${pokemonData?.bgColor}`}
      position="relative"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Grid templateColumns="repeat(3, 1fr)" h="230px" overflowY="hidden">
        <GridItem h="230px">
          <VStack
            bg="white"
            h="230px"
            justifyContent="center"
            borderLeftRadius="lg"
          >
            <Text
              textTransform="capitalize"
              fontWeight="bold"
              textShadow="md"
              fontSize="xl"
              fontFamily="fonts.karla"
              textAlign="center"
              paddingX="0.25rem"
            >
              {!isLoading ? pokemonData?.name : 'Pokemon name'}
            </Text>
            <Flex justifyContent="space-between" gap=".25rem">
              <VStack>
                <Flex
                  boxSize="2.25rem"
                  borderRadius="full"
                  border="2px"
                  color="brand.black"
                  justifyContent="center"
                  alignItems="center"
                >
                  {!isLoading ? pokemonData?.stats[1].base_stat : 0}
                </Flex>
                <Text
                  textTransform="capitalize"
                  color="blackAlpha.500"
                  fontSize="sm"
                >
                  {!isLoading ? pokemonData?.stats[1].stat.name : 'Stat'}
                </Text>
              </VStack>
              <VStack>
                <Flex
                  boxSize="2.25rem"
                  borderRadius="full"
                  border="2px"
                  color="brand.black"
                  justifyContent="center"
                  alignItems="center"
                >
                  {!isLoading ? pokemonData?.stats[2].base_stat : 0}
                </Flex>
                <Text
                  textTransform="capitalize"
                  color="blackAlpha.500"
                  fontSize="sm"
                >
                  {!isLoading ? pokemonData?.stats[2].stat.name : 'Stat'}
                </Text>
              </VStack>
            </Flex>
          </VStack>
        </GridItem>
        <GridItem colSpan={2} h="230px">
          <VStack h="230px" alignItems="center" justifyContent="center">
            {!isLoading ? (
              <Image
                boxSize="180px"
                objectFit="contain"
                objectPosition="center"
                borderRadius="lg"
                src={pokemonData?.picture}
                alt="pokemon picture"
                fallback={<Skeleton boxSize="180px" borderRadius="full" />}
              />
            ) : (
              <Spinner size="xl" color="types.normal" />
            )}
          </VStack>
        </GridItem>
      </Grid>
      <HStack spacing={4} position="absolute" left="1rem" bottom="1rem">
        {!isLoading ? (
          pokemonData?.types.map(({ slot, type }) => (
            <Tag
              key={slot}
              variant="solid"
              textTransform="capitalize"
              bg={`types.${type.name}`}
            >
              {type.name}
            </Tag>
          ))
        ) : (
          <Tag variant="solid" bg="types.normal">
            undefine
          </Tag>
        )}
      </HStack>
    </Box>
  );
};
