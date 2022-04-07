import { Box, IconButton } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { INavIcons } from '../../navIcons';

const MotionIconButton = motion(IconButton);

interface IMobileNavButton {
  selectedIcon: INavIcons;
  handleIsOpen: () => void;
}

export const MobileNavButton = ({
  selectedIcon,
  handleIsOpen,
}: IMobileNavButton) => {
  return (
    <Box position="absolute" zIndex="100" right="1.5rem">
      <AnimatePresence exitBeforeEnter>
        <MotionIconButton
          key={selectedIcon.label}
          initial={{ opacity: 0, rotate: -180, scale: 0.25 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 180, scale: 0.25 }}
          transition={{ duration: 0.15, type: 'easeInOut' }}
          aria-label="menu icon"
          fontSize="4xl"
          icon={<selectedIcon.icon />}
          colorScheme="blackAlpha"
          variant="ghost"
          onClick={handleIsOpen}
        />
      </AnimatePresence>
    </Box>
  );
};
