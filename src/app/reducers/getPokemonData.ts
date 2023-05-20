import axios from 'axios';
import { genericPokemonType, createdPokemonType } from './../../utils/Types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonTypes } from '../../utils/getPokemonTypes';
//random pokemon 데이터 가져오기

export const getPokemonData = createAsyncThunk(
  'pokemon/randomPokemons',
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: createdPokemonType[] = [];

      for await (const pokemon of pokemons) {
        const { data } = await axios.get(pokemon.url);
        const { id, name } = data;
        //console.log('data : 각 포켓몬 url에 들어있는 상세한 정보들 가져오기',data);
        //const image = data.sprites.other.home.front_default || data.sprites.other.dream_word.front_default || data.sprites.front_default;
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
          types /**내가 만든 types array임 
                    [{bug: {
                        image: bug,
                        strength: [Grass, Psychic, Dark],
                        weakness: [Fighting, Flying, Poison, Ghost, Steel, Fire, Fairy],
                        resistance: [Fighting, Ground, Grass],
                        vulnerable: [Flying, Rock, Fire],
                    }, ... }]*/,
        });
      }

      //console.log('pokemonsData',pokemonsData);
      return pokemonsData;
    } catch (error) {
      console.log(error);
    }
  }
);
