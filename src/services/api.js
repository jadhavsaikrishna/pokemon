import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2";

export const searchPokemon = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${searchTerm}`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Error occurred while searching Pokémon. Please try again."
    );
  }
};

export const fetchPokemonList = async (limit = 10, offset = 0) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Error occurred while fetching Pokémon list. Please try again."
    );
  }
};

export const fetchPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Error occurred while fetching Pokémon details. Please try again."
    );
  }
};
