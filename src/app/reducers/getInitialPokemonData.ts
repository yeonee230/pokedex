import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonRout } from "../../utils/Constants";

export const getInitialPokemonData = createAsyncThunk('pokemon/initialData',async () => {
    try {
        const {data} = await axios.get(pokemonRout)
        console.log(data);
        
        return data.results;
    } catch (error) {
        console.log(error)
    }
    
})