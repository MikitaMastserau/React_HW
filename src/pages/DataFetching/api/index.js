export const getPokemonsList = (url) => fetch(url).then((response) => response.json());