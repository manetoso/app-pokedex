import { useEffect, useState } from 'react';
import axios from 'axios';
import { SimplePokemon } from '../interfaces/fetchAllPokemonsResponse';
import {
  PokemonDataResponse,
  SimplePokemonData,
} from '../interfaces/pokemonData';

export const usePokemonData = (pokemon: SimplePokemon) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<SimplePokemonData>();

  const fetchPokemonData = async () => {
    const resp = await axios.get<PokemonDataResponse>(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
    );
    mapPokemonDataToSimplePokemonData(resp.data);
  };

  const mapPokemonDataToSimplePokemonData = (
    pokemonDataResp: PokemonDataResponse
  ) => {
    const name = pokemonDataResp.name;
    const picture =
      pokemonDataResp.sprites.other?.dream_world.front_default ||
      pokemonDataResp.sprites.other?.home.front_default ||
      pokemonDataResp.sprites.other?.['official-artwork'].front_default ||
      pokemonDataResp.sprites.front_default ||
      'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';
    const types = pokemonDataResp.types;
    const stats = pokemonDataResp.stats;
    const bgColor = pokemonDataResp.types[0].type.name;
    setPokemonData({
      name,
      picture,
      types,
      stats,
      bgColor,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return { isLoading, pokemonData };
};
