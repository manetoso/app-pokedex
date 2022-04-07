import { Box, Button, Image, List, ListItem, VStack } from '@chakra-ui/react';
import { Location, NavLink } from 'react-router-dom';
import { routes } from '../../routes';

interface Props {
  isOpen: boolean;
  handleIsOpen: () => void;
  location: Location;
}

export const MobileNavList = ({ isOpen, handleIsOpen, location }: Props) => {
  return (
    <>
      <Box
        position="absolute"
        bgGradient="linear(to-t, brand.primary, brand.third)"
        left="0"
        top={isOpen ? '0' : '-430%'}
        right="0"
        borderBottomRadius="3xl"
        zIndex="90"
        transition="ease-in-out"
        transitionDuration="500ms"
      >
        <VStack paddingY="2.5rem">
          <Image src="./assets/logo.svg" alt="app logo" w="8rem" />
          <List spacing="2">
            {routes.map(route => (
              <ListItem
                key={route.to}
                textAlign="center"
                fontFamily="sourceSans"
                fontSize="3xl"
                cursor="pointer"
              >
                <Button
                  w="100%"
                  fontFamily="sourceSans"
                  fontSize="3xl"
                  colorScheme="blackAlpha"
                  variant={location.pathname === route.to ? 'solid' : 'ghost'}
                  as={NavLink}
                  to={route.to}
                  onClick={() => {
                    handleIsOpen();
                  }}
                >
                  {route.label}
                </Button>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>
      <Box
        position="fixed"
        bg="blackAlpha.400"
        left={isOpen ? '0' : '-100vw'}
        top="0"
        minW="100vw"
        minH="100vh"
        zIndex="89"
        onClick={handleIsOpen}
      ></Box>
    </>
  );
};
