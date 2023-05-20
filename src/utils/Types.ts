export interface AppTypeInitialState {}
export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons :undefined| createdPokemonType[];
}

export interface genericPokemonType {
  //처음 api로 json데이터 받았을 때 values들의 타입
  name: string;
  url: string;
}

export interface createdPokemonType {
  id: number;
  name: string;
  image: string;
  // types: [{type:genericPokemonType}]
  types: pokemonTypeInterface[];
}

export interface pokemonTypeInterface {
  [key: string]: {
    image: string;
    strength: string[];
    weakness: string[];
    resistance: string[];
    vulnerable: string[];
  };
}
