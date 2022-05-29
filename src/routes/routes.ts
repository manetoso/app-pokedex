import { Home, Legendaries, Pokedex, TheTeam } from '../pages';

export interface IRoute {
  to: string;
  path: string;
  Component: () => JSX.Element;
  label: string;
}

export const routes: IRoute[] = [
  {
    to: '/',
    path: '/',
    Component: Home,
    label: 'Home',
  },
  {
    to: '/pokedex',
    path: 'pokedex',
    Component: Pokedex,
    label: 'Pokedex',
  },
  // {
  //   to: '/legendaries',
  //   path: 'legendaries',
  //   Component: Legendaries,
  //   label: 'Legendaries',
  // },
  {
    to: '/the-team',
    path: 'the-team',
    Component: TheTeam,
    label: 'The team',
  },
];
