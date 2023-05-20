export interface AppTypeInitialState{}
export interface PokemonTypeInitialState{
    allPokemon: undefined | genericPokemonType[]
}

export interface genericPokemonType{ //처음 api로 json데이터 받았을 때 values들의 타입
    name:string;
    url:string;
}