import React, { useState } from "react";
import axios from "axios";
import './SearchPage.css';

const SearchPage = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      setSearchResult([response.data]);
    } catch (error) {
      setError("Error occurred while searching Pokémon. Please try again.");
    }

    setLoading(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
    <div>
      <h1>Search Pokémon</h1>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {searchResult.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResult.map((pokemon) => (
              <li key={pokemon.name}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchPage;
