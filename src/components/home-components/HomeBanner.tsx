import { Heading, Image, useMediaQuery } from '@chakra-ui/react';

export const HomeBanner = () => {
  const [isLg] = useMediaQuery('(min-width: 62em)');
  return (
    <>
      {(!isLg && (
        <Image objectFit="cover" src="/assets/banners/mobile-home-banner.svg" />
      )) || (
        <Image
          w="100%"
          objectFit="cover"
          src="/assets/banners/mobile-home-banner.svg"
        />
      )}
    </>
  );
};
