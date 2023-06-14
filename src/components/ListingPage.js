import React, { useState, useEffect } from "react";
import axios from "axios";
import './ListingPage.css';

const ListingPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      setPokemonList(response.data.results);
      setNextPageUrl(response.data.next);
    } catch (error) {
      setError("Error occurred while fetching Pokémon list. Please try again.");
    }

    setLoading(false);
  };

  const loadMorePokemon = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(nextPageUrl);
      setPokemonList((prevList) => [...prevList, ...response.data.results]);
      setNextPageUrl(response.data.next);
    } catch (error) {
      setError("Error occurred while loading more Pokémon. Please try again.");
    }

    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <div className="listing-page">
        <h1>Pokémon List</h1>
        <ul className="pokemon-list">
          {pokemonList.map((pokemon, index) => (
            <li key={pokemon.name}>
              <span className="serial-number">{index + 1}. </span>
              {pokemon.name}
            </li>
          ))}
        </ul>
        {nextPageUrl && (
          <button onClick={loadMorePokemon} disabled={loading}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default ListingPage;
