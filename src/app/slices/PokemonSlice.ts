import { getInitialPokemonData } from './../reducers/getInitialPokemonData';
import { createSlice } from '@reduxjs/toolkit';
import { PokemonTypeInitialState } from './../../utils/Types';

const initialState: PokemonTypeInitialState = {
  allPokemon: undefined,
};

export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) =>{
      state.allPokemon = action.payload;
    })
  }
});

export const {} = PokemonSlice.actions;
