import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getInitialPokemonData } from './app/reducers/getInitialPokemonData';

function App() {
  const { allPokemon } = useAppSelector(({ pokemon }) => pokemon);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);
  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .splice(0, 20);
      console.log(randomPokemonsId);
      
    }
  }, [allPokemon]);

  return <>Hello word 🔆</>;
}

export default App;
