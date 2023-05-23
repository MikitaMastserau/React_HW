const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = () => fetch(BASE_URL).then((response) => response.json());