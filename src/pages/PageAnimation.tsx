import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const pageMotion = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const MotionBox = motion(Box);

interface Props {
  children: JSX.Element;
}

export const PageAnimation = ({ children }: Props) => {
  return (
    <MotionBox
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      w="100%"
    >
      {children}
    </MotionBox>
  );
};
