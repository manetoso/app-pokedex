import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#F2B807',
      second: '#F28F16',
      third: '#F5DB13',
      danger: '#D93E30',
      white: '#F6F7F9',
      black: '#212121',
    },
    types: {
      normal: '#A0A29F',
      fighting: '#D6435F',
      flying: '#98BCEC',
      poison: '#B066CF',
      ground: '#DE7C4D',
      rock: '#CEBB8B',
      bug: '#9BBB31',
      ghost: '#4E6FBC',
      steel: '#4F95A3',
      fire: '#FFA54D',
      water: '#349EDF',
      grass: '#6ABD5A',
      electric: '#FBD850',
      psychic: '#FE8581',
      ice: '#73D0C2',
      dragon: '#006CC7',
      dark: '#585761',
      fairy: '#EB93E5',
      unknown: '#585761',
      shadow: '#585761',
    },
  },
  fonts: {
    karla: 'Karla, sans-serif',
    sourceSans: 'Source Sans Pro, sans-serif',
    anton: 'Anton, sans-serif',
  },
});

export default theme;
