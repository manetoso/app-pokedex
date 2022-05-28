import { useEffect, useState } from 'react';
import { SimplePokemon } from '../interfaces/fetchAllPokemonsResponse';

export const usePokemonGrid = (simplePokemonList: SimplePokemon[]) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLabel, setPageLabel] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      setFilteredPokemons(
        simplePokemonList.slice(currentPage, currentPage + 9)
      );
      setMaxPage(Math.ceil(simplePokemonList.length / 9));
    } else {
      const filtered = simplePokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
      setMaxPage(Math.ceil(filtered.length / 9));
      setFilteredPokemons(filtered.slice(currentPage, currentPage + 9));
    }
  }, [simplePokemonList, search, currentPage]);

  const handlePagination = (desireCurrent: number, desirePage: number) => {
    const newCurrentPage = Math.max(currentPage + desireCurrent, 0);
    const newPageLabel = Math.max(pageLabel + desirePage, 0);
    setCurrentPage(newCurrentPage);
    setPageLabel(newPageLabel);
  };

  const handleOnSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setPageLabel(1);
    setSearch(event.target.value);
  };

  const handleSearchReset = () => {
    setSearch('');
  };

  return {
    filteredPokemons,
    pageLabel,
    maxPage,
    search,
    handleOnSearchChange,
    handlePagination,
    handleSearchReset,
  };
};
