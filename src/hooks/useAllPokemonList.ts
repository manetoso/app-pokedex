import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import {
  FetchAllPokemonsResponse,
  Result,
  SimplePokemon,
} from '../interfaces/fetchAllPokemonsResponse';

export const useAllPokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=1200');
  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokemonApi.get<FetchAllPokemonsResponse>(
      nextPageUrl.current
    );
    nextPageUrl.current = resp.data.next || '';
    mapPokemonListToSimplePokemon(resp.data.results);
  };

  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      return {
        id,
        name,
      };
    });

    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { isLoading, simplePokemonList, loadPokemons };
};
