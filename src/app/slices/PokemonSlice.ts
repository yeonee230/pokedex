import { createSlice } from '@reduxjs/toolkit';
import { PokemonTypeInitialState } from './../../utils/Types';

const initialState: PokemonTypeInitialState = {};

export const PokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
});

export const {} = PokemonSlice.actions;
