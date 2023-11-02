import React, { useContext, useState } from "react";
import { fetchMovies } from "../services/api"; // Import fetchMovies
import { MovieContext } from "../MovieContext";
import MovieList from "./MovieList";
//import { Link } from 'react-router-dom';

const SearchBar = () => {
  const { dispatch } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const movies = await fetchMovies(lowercaseSearchTerm); // Use fetchMovies here
      dispatch({ type: "SET_MOVIES", payload: movies });
      setSearchTerm(""); // Clear the search input
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      
      <button onClick={handleSearch} type="submit">
        Search
      </button>
      <MovieList />
    </div>
  );
};

export default SearchBar;

