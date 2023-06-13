import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getInitialPokemonData } from './app/reducers/getInitialPokemonData';
import { getPokemonData } from './app/reducers/getPokemonData';
import Navbar from './components/Navbar';

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
        .splice(0, 5);
      //console.log(randomPokemonsId);
      dispatch(getPokemonData(randomPokemonsId))
    }
  }, [allPokemon,dispatch]);

  return <>
  <Navbar />
  
  
  </>;
}

export default App;
