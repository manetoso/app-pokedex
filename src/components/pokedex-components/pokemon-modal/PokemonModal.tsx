import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { DetailPokemonData } from '../../../interfaces/pokemonData';
import closeIcon from '../../../assets/closeIcon.svg';
import { PokemonCardModalMobile } from './PokemonCardModalMobile';
import { PokemonCardModal } from './PokemonCardModal';

interface Props {
  isLg: Boolean;
  isOpen: Boolean;
  handleIsOpen: () => void;
  pokemonData: DetailPokemonData;
}

export const PokemonModal = ({
  isLg,
  isOpen,
  handleIsOpen,
  pokemonData,
}: Props) => {
  return (
    <>
      <Flex
        position="fixed"
        left="0"
        top="0"
        transform={isOpen ? 'scale(1)' : 'scale(0)'}
        minW="100vw"
        minH="100vh"
        transition="ease-in-out"
        transitionDuration="300ms"
        zIndex="999"
        justifyContent="center"
        alignItems={isLg ? 'center' : 'end'}
      >
        <Box
          position="relative"
          bgGradient={`linear(to-t, types.${pokemonData.bgColor}.300, types.${pokemonData.bgColor}.500)`}
          transform={isOpen ? 'scale(1)' : 'scale(0)'}
          minW={isLg ? 'auto' : '100vw'}
          minH={isLg ? 'auto' : '100vh'}
          borderRadius="3xl"
          transition="ease-in-out"
          transitionDuration="300ms"
          boxShadow="lg"
        >
          {isLg ? (
            <>
              <IconButton
                aria-label="Close"
                icon={<Image src={closeIcon} />}
                position="absolute"
                top="-3rem"
                right="0"
                variant="ghost"
                colorScheme="types.shadow"
                fontSize="5xl"
                onClick={handleIsOpen}
              />
              <PokemonCardModal pokemonData={pokemonData} />
            </>
          ) : (
            <>
              <IconButton
                aria-label="Close"
                icon={<Image src={closeIcon} />}
                position="absolute"
                top="0.25rem"
                left="0.25rem"
                variant="ghost"
                colorScheme="trueBlack"
                fontSize="5xl"
                onClick={handleIsOpen}
                zIndex="100"
              />
              <PokemonCardModalMobile pokemonData={pokemonData} />
            </>
          )}
        </Box>
      </Flex>
      <Box
        position="fixed"
        bg="blackAlpha.400"
        left={isOpen ? '0' : '-100vw'}
        top="0"
        minW="100vw"
        minH="100vh"
        zIndex="998"
        onClick={handleIsOpen}
      ></Box>
    </>
  );
};
