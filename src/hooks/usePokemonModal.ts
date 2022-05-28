import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const usePokemonModal = () => {
  const [isLg] = useMediaQuery('(min-width: 62em)');
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(oldIsOpen => !oldIsOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return {
    isLg,
    isOpen,
    handleIsOpen,
  };
};
