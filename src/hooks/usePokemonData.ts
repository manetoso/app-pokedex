import { useEffect, useState } from 'react';
import axios from 'axios';
import { SimplePokemon } from '../interfaces/fetchAllPokemonsResponse';
import {
  DetailPokemonData,
  PokemonDataResponse,
  SimplePokemonData,
} from '../interfaces/pokemonData';
import { GameInfo } from '../interfaces/fetchGameInfo';
import { FetchVersionGame } from '../interfaces/fetchVersionGame';

export const usePokemonData = (pokemon: SimplePokemon) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<DetailPokemonData>();

  const fetchPokemonData = async () => {
    const resp = await axios.get<PokemonDataResponse>(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
    );
    mapPokemonDataToSimplePokemonData(resp.data);
  };

  const mapPokemonDataToSimplePokemonData = async (
    pokemonDataResp: PokemonDataResponse
  ) => {
    const id = pokemonDataResp.id;
    const name = pokemonDataResp.name;
    const picture =
      pokemonDataResp.sprites.other?.dream_world.front_default ||
      pokemonDataResp.sprites.other?.home.front_default ||
      pokemonDataResp.sprites.other?.['official-artwork'].front_default ||
      pokemonDataResp.sprites.front_default ||
      'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';
    const types = pokemonDataResp.types;
    let stats = pokemonDataResp.stats.filter(stat => stat.stat.name !== 'hp');
    stats = stats.filter(stat => stat.stat.name !== 'speed');
    const bgColor = pokemonDataResp.types[0].type.name;
    const abilities = pokemonDataResp.abilities;
    const base_experience = pokemonDataResp.base_experience;
    const hp = pokemonDataResp.stats[0];
    let firstGame;
    let versionGroup;
    let version;
    let versionName;
    if (pokemonDataResp.game_indices.length !== 0) {
      firstGame = await axios.get<GameInfo>(
        pokemonDataResp.game_indices[0].version.url
      );
      versionGroup = await axios.get<FetchVersionGame>(
        firstGame.data.version_group.url
      );
      version = versionGroup.data.generation.name
        ? versionGroup.data.generation.name
        : 'undefined';
      versionName = versionGroup.data.name
        ? versionGroup.data.name
        : 'undefined';
    } else {
      version = 'undefined';
      versionName = 'undefined';
    }
    setPokemonData({
      id,
      name,
      picture,
      abilities,
      base_experience,
      types,
      hp,
      stats,
      bgColor,
      version,
      versionName,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return { isLoading, pokemonData };
};
