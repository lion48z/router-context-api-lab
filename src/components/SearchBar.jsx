import React, { useContext, useState } from 'react';
import { fetchMovies } from '../services/api';
import { MovieContext } from '../context/MovieContext';
import MovieList from './MovieList'; // Import the MovieList component

const SearchBar = () => {
  const { dispatch } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [year, setYear] = useState(''); 
  const [plot, setPlot] = useState(''); 
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const movies = await fetchMovies(searchTerm, year, plot);
      dispatch({ type: 'SET_MOVIES', payload: movies });
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Plot"
        value={plot}
        onChange={(e) => setPlot(e.target.value)}
      />
      <button onClick={handleSearch} type="submit">
        Search
      </button>
      <MovieList /> 
    </div>
  );
};

export default SearchBar;
