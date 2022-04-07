import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from '../../routes';

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route
          path="/*"
          element={<Navigate to={routes[routes.length - 1].to} replace />}
        />
      </Routes>
      //{' '}
    </AnimatePresence>
  );
};
