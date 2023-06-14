import React, { useState, useEffect } from "react";
import './BookmarksPage.css';

const BookmarksPage = () => {
  const [bookmarkedPokemon, setBookmarkedPokemon] = useState([]);

  useEffect(() => {
    // Retrieve bookmarked Pokemon from local storage or any other local storage mechanism
    const bookmarkedData = localStorage.getItem("bookmarkedPokemon");
    if (bookmarkedData) {
      setBookmarkedPokemon(JSON.parse(bookmarkedData));
    }
  }, []);

  const handleRemoveBookmark = (pokemonId) => {
    // Remove the selected Pokemon from bookmarks
    const updatedBookmarks = bookmarkedPokemon.filter(
      (pokemon) => pokemon.id !== pokemonId
    );
    setBookmarkedPokemon(updatedBookmarks);
    // Update the local storage or any other local storage mechanism with the updated bookmarked Pokemon data
    localStorage.setItem("bookmarkedPokemon", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="container">
    <div>
      <h1>Bookmarks</h1>
      {bookmarkedPokemon.length > 0 ? (
        <ul>
          {bookmarkedPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              <h3>{pokemon.name}</h3>
              <button onClick={() => handleRemoveBookmark(pokemon.id)}>
                Remove Bookmark
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookmarks available.</p>
      )}
    </div>
    </div>
  );
};

export default BookmarksPage;
