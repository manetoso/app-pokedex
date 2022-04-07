import { Box, HStack, Text } from '@chakra-ui/react';
import { Location, NavLink } from 'react-router-dom';
import { IRoute, routes } from '../../routes';

interface Props {
  location: Location;
}

export const NavList = ({ location }: Props) => {
  return (
    <Box>
      <HStack spacing="4rem">
        {routes.map(route => (
          <Box
            key={route.to}
            fontFamily="sourceSans"
            fontSize="3xl"
            cursor="pointer"
            borderRadius="md"
            transition="ease-in-out"
            transitionDuration="300ms"
            _hover={{
              bg: 'blackAlpha.100',
            }}
            role="group"
            as={NavLink}
            to={route.to}
          >
            <Text
              borderBottom="2px"
              paddingX="0.5rem"
              borderBottomColor={
                location.pathname === route.to ? 'brand.black' : 'transparent'
              }
              transition="ease-in-out"
              transitionDuration="300ms"
              _hover={{
                borderBottomColor: 'brand.black',
              }}
            >
              {route.label}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};
