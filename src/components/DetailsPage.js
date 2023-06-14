import React, { useState, useEffect } from "react";
import axios from "axios";
import './DetailsPage.css';

const DetailsPage = ({ match }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const pokemonName = match.params.name;

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
      } catch (error) {
        setError(
          "Error occurred while fetching Pokémon details. Please try again."
        );
      }

      setLoading(false);
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  const handleBookmark = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  return (
    <div className="details-page">
      <div className="details-content">
    <div className="container">
    <div>
      <h1>Pokémon Details</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
  
          <button onClick={handleBookmark}>
            {isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          </button>
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
  );
};

export default DetailsPage;
