import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { MovieContext } from '../MovieContext';

const SearchPage = () => {
  const { state } = useContext(MovieContext);

  return (
    <div>
      <SearchBar />
      {state.movies && state.movies.length > 0 ? (
        <MovieList movies={state.movies} />
      ) : (
        <p>No movies found.</p>
      )}
      <Outlet />
    </div>
  );
};

export default SearchPage;

