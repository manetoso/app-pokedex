import { Button } from '@chakra-ui/react';

interface Props {
  buttonType: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  [x: string]: any;
}

export const CustomButton = ({
  buttonType,
  children,
  onClick,
  ...props
}: Props) => {
  return (
    <Button
      position="relative"
      fontWeight="bold"
      fontFamily="fonts.karla"
      fontSize="2xl"
      paddingY="1.5rem"
      bg={
        (buttonType === 'primary' && 'types.grass.500') ||
        (buttonType === 'secondary' && 'brand.third.500') ||
        'blackAlpha.500'
      }
      borderRadius="xl"
      borderBottom="8px"
      borderBottomColor="blackAlpha.300"
      transition="ease-in-out"
      transitionDuration="1500ms"
      _hover={{
        bg:
          (buttonType === 'primary' && 'types.grass.500') ||
          (buttonType === 'secondary' && 'brand.third.500') ||
          'blackAlpha.500',
      }}
      transformOrigin=""
      _active={{
        borderBottom: '1px',
        transform: '',
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};
