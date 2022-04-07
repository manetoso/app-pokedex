import {
  Grid,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiX,
} from 'react-icons/hi';
import { PokemonCard } from '../components';
import { useAllPokemonList, usePokemonGrid } from '../hooks';
import { PageAnimation } from './PageAnimation';

export const Pokedex = () => {
  const { isLoading, simplePokemonList } = useAllPokemonList();
  const {
    filteredPokemons,
    pageLabel,
    maxPage,
    search,
    handleOnSearchChange,
    handlePagination,
    handleSearchReset,
  } = usePokemonGrid(simplePokemonList);

  return (
    <PageAnimation>
      <Stack
        paddingX="1rem"
        marginY="2rem"
        marginX="auto"
        gap="2rem"
        maxW={{
          base: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
      >
        <Heading
          as="h1"
          fontWeight="normal"
          textAlign="center"
          letterSpacing="0.25rem"
        >
          800{' '}
          <Heading as="p" display="inline">
            Pokemons
          </Heading>{' '}
          for you to choose your favorite
        </Heading>
        <VStack id="pokemons-top-grid">
          <InputGroup size="md">
            <Input
              value={search}
              onChange={handleOnSearchChange}
              placeholder="Ecuentra tu pokemon"
              variant="filled"
              rounded="full"
              boxShadow="lg"
              bg="blackAlpha.200"
              color="blackAlpha.700"
              _placeholder={{
                color: 'blackAlpha.500',
              }}
            />
            <InputRightElement right="0.5rem">
              <IconButton
                size="sm"
                onClick={handleSearchReset}
                variant="solid"
                colorScheme="blackAlpha"
                rounded="md"
                aria-label="clear search"
                icon={<HiX />}
              />
            </InputRightElement>
          </InputGroup>
        </VStack>
        <VStack>
          {!isLoading ? (
            <Grid
              w="100%"
              gap="2rem"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
            >
              {filteredPokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </Grid>
          ) : (
            <Spinner size="xl" />
          )}
        </VStack>
        <HStack gap="1rem" justifyContent="center">
          <IconButton
            onClick={() => handlePagination(-9, -1)}
            as="a"
            href="#pokemons-top-grid"
            aria-label="Previous Page"
            variant="outline"
            colorScheme="yellow"
            isDisabled={pageLabel === 1 && true}
            icon={<HiOutlineChevronLeft />}
          />
          <Text>
            {pageLabel} ... {maxPage}
          </Text>
          <IconButton
            onClick={() => handlePagination(+9, +1)}
            as="a"
            href="#pokemons-top-grid"
            aria-label="Next Page"
            variant="outline"
            colorScheme="yellow"
            isDisabled={pageLabel === maxPage && true}
            icon={<HiOutlineChevronRight />}
          />
        </HStack>
      </Stack>
    </PageAnimation>
  );
};
