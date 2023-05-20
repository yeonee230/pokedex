//random pokemon 데이터 가져오기

import axios from 'axios';
import { genericPokemonType, createdPokemonType } from './../../utils/Types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonTypes } from '../../utils/getPokemonTypes';

export const getPokemonData = createAsyncThunk(
  'pokemon/randomPokemons',
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: createdPokemonType[] = [];

      for await (const pokemon of pokemons) {
        const { data } = await axios.get(pokemon.url);
        const { id, name } = data;
     
        const image = data.sprites?.other?.home?.front_default || data.sprites?.other?.dream_word?.front_default || data.sprites?.front_default;
        const types = data.types.map(
            //data.types = [{slot:1, type:{name:'aaa', url:'bbb' }}, ...]
          ({ type: { name } }: { type: { name: string } }) => ({
            [name]: pokemonTypes[name],
          })
        );
        
        pokemonsData.push({
          id,
          name,
          image,
          types,
        });
      }

      return pokemonsData;
    } catch (error) {
      console.log(error);
    }
  }
);
